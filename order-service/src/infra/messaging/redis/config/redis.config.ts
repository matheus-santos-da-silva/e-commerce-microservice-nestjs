import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from 'src/app.module';

export const addRedisClient = async (config: ConfigService) => {
  const logger = new Logger('RedisClient');
  const redisHost = config.get('REDIS_HOST');
  const redisPort = config.get('REDIS_PORT');

  logger.log(`Connecting to Redis server at ${redisHost}:${redisPort}`);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: redisHost,
        port: redisPort,
      },
    },
  );

  await app.listen().then(() => logger.debug('Redis client is listening'));
};
