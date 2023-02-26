import { Controller, Post, Body, Logger } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { QuestionDto } from './entities/question.entity';

import * as Usecases from './usecase';

@ApiTags('questions')
@Controller('questions')
export class QuestionsController {
  private readonly logger = new Logger(QuestionsController.name);

  constructor(
    private askQuestionUsecase: Usecases.AskQuestion,
    private createAccessTokenUsecase: Usecases.CreateJwtToken,
    private readChunkUsecase: Usecases.ReadChunk,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Ask question' })
  async ask(@Body() questionDto: QuestionDto) {
    const chunks = await this.askQuestionUsecase.execute(questionDto);
    const token = await this.createAccessTokenUsecase.execute();

    const readChunkRequests = chunks.map((c) =>
      this.readChunkUsecase.execute({
        chunkId: c.chunkId,
        confidence: c.confidence,
        accessToken: token,
      }),
    );

    const answers = await Promise.all(readChunkRequests);

    return {
      data: answers.filter((a) => a.confidence > 70),
    };
  }
}
