import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  var bootstrapConfig = new DocumentBuilder()
    .setTitle('Voco Company API')
    .setVersion('1.0')
    .addTag('Controllers')
    .build();

  const document = SwaggerModule.createDocument(app, bootstrapConfig);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
