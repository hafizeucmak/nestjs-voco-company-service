import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class GlobalResponseInterceptor<T> implements NestInterceptor<T, any> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const response = context.switchToHttp().getResponse();
        const request = context.switchToHttp().getRequest();
        return next.handle().pipe(
            map((data) => {
                if (data instanceof Object && data.hasOwnProperty('message') && data.hasOwnProperty('data')) {
                    return {
                        status: response.statusCode,
                        warn: data.message,
                        data: data.data,
                        errorMessage: null
                    };
                }

                return {
                    status: response.statusCode,
                    warn: null,
                    data: data,
                    errorMessage: null
                };
            }),
        );
    }
}