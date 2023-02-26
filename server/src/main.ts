import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Blog api template')
    .setDescription('The blogs api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}

(async () => {
  const app = await NestFactory.create(AppModule);
  // Make all inputs validated based on dto's
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  // Load .env variables
  ConfigModule.forRoot({ isGlobal: true });

  // Add Swagger page
  setupSwagger(app);

  await app.listen(3000);
})();
