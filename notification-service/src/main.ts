import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './env';
import { ConfigService } from '@nestjs/config';
import { addRedisClient } from './infra/messaging/redis/config/redis.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  await app.listen(PORT);
  await addRedisClient(configService).catch((error) => {
    console.error('Failed to initialize Redis client:', error);
    process.exit(1);
  });
}
bootstrap();
