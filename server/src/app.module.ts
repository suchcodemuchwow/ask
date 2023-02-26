import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

// User defined modules
import { QuestionsModule } from './questions/questions.module';

// Middlewares
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [QuestionsModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
