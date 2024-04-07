import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, HttpServer, HttpStatus } from "@nestjs/common";
import { AbstractHttpAdapter, BaseExceptionFilter } from "@nestjs/core";
import { captureException } from '@sentry/node';
import { AlreadyExistsException } from "src/custom-exceptions/already-exists.exception";
import { createLogger, format, transports } from 'winston';
import 'winston-mongodb';

@Catch(HttpException, Error)
export class HttpExceptionFilter
    extends BaseExceptionFilter
    implements ExceptionFilter {
    private readonly logger: any;

    constructor(
        private sentryEnabled: boolean = false,
        applicationRef: any,
    ) {
        super(applicationRef);
        this.logger = createLogger({
            format: format.combine(
                format.timestamp(),
                format.json(),
                format.metadata(),
            ),
            transports: [
                new transports.MongoDB({
                    db: process.env.MONGO_URL,
                    dbName: process.env.MONGO_DB_NAME,
                    options: { useUnifiedTopology: true },
                    collection: 'logs',
                    level: 'info',
                }),
            ],
        });
    }

    catch(exception: HttpException | Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        // if error occurs, log it to the database
        this.logger.error(exception.message, {
            stack: exception.stack,
            url: request.url,
            method: request.method,
            body: request.body,
            query: request.query,
            headers: request.headers,
        });

        if (exception instanceof HttpException) {
            const status = exception.getStatus();
            return response.status(status).json({
                success: false,
                data: null,
                errorMessage: exception.getResponse()['message'] || exception.message,
            });

        }
        else this.handleUnknownError(exception, host, this.applicationRef);
    }

    handleUnknownError(
        exception: any,
        host: ArgumentsHost,
        applicationRef: HttpServer<any, any> | AbstractHttpAdapter<any, any, any>,
    ): void {

        const response = host.switchToHttp().getResponse();
        if (this.sentryEnabled) captureException(exception);

        response.status(400).json({
            success: false,
            data: null,
            errorMessage: response.message || "An error occurred.",
        });
        super.handleUnknownError(exception, host, applicationRef);
    }
}