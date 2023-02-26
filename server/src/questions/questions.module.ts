import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import * as Usecases from 'questions/usecase';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [QuestionsController],
  providers: [
    Usecases.AskQuestion,
    Usecases.CreateJwtToken,
    Usecases.ReadChunk,
  ],
})
export class QuestionsModule {}
