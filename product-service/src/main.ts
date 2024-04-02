import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PORT } from './env';
import { ConfigService } from '@nestjs/config';
import { addRedisClient } from './infra/messaging/redis/config/redis.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Product-Service')
    .setDescription('Product Microservice of E-commerce')
    .setVersion('1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(PORT);
  await addRedisClient(configService).catch((error) => {
    console.error('Failed to initialize Redis client:', error);
    process.exit(1);
  });
}
bootstrap();
