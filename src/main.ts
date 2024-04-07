import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './middleware/error.handler';
import { I18nValidationExceptionFilter } from 'nestjs-i18n';
import { GlobalResponseInterceptor } from './middleware/response.handler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  var bootstrapConfig = new DocumentBuilder()
    .setTitle('Voco Company Rest API')
    .setVersion('1.0')
    .addTag('Controllers')
    .build();

  const document = SwaggerModule.createDocument(app, bootstrapConfig);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe())

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new HttpExceptionFilter(process.env.ENV == 'prod', httpAdapter),
    new I18nValidationExceptionFilter({
      responseBodyFormatter: (host, exc, formattedErrors) => {
        return {
          success: false,
          data: null,
          errorMessage: exc.errors.map(
            (error) => Object.values(error.constraints)[0],
          ),
        };
      },
      detailedErrors: false,
    }),
  );

  app.useGlobalInterceptors(new GlobalResponseInterceptor());

  await app.listen(process.env.PORT);
}
bootstrap();
