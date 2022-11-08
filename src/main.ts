import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';
import { ElasticsearchService } from './shared/elasticsearch/elasticsearch.service';
import { ElasticInterceptor } from './interceptors/elastic-interceptor';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  const elasticsearchService = app.select(AppModule).get(ElasticsearchService);
  app.useGlobalInterceptors(new ElasticInterceptor(elasticsearchService));
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
    { inheritAppConfig: true },
  );
  // const appMicroservice =
  //   await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //     transport: Transport.REDIS,
  //     options: {
  //       host: 'localhost',
  //       port: 6379,
  //     },
  //   });
  await app.listen(3001);
  await app.startAllMicroservices();

  // await appMicroservice.listen();
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
