import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.enableCors({ credentials: false, origin: true });

  app.use('./uploads', express.static(path.join(__dirname, '../uploads')));

  const config = new DocumentBuilder()
    .setTitle('Облачное хранилище')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(7777);
}
bootstrap();
