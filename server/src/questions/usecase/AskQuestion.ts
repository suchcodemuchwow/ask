import { Injectable } from '@nestjs/common';
import { IUsecase } from './usecase';
import { HttpService } from '@nestjs/axios';
import {
  InferenceRunnerResponse,
  QuestionDto,
} from '../entities/question.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AskQuestion implements IUsecase<QuestionDto> {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async execute(data: QuestionDto) {
    const INFERENCE_RUNNER_URL = this.configService.get<string>(
      'INFERENCE_RUNNER_URL',
    );

    const INFERENCE_RUNNER_API_KEY = this.configService.get<string>(
      'INFERENCE_RUNNER_API_KEY',
    );

    const response =
      await this.httpService.axiosRef.post<InferenceRunnerResponse>(
        INFERENCE_RUNNER_URL,
        { question: data.body },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': INFERENCE_RUNNER_API_KEY,
          },
        },
      );

    return response.data.chunks;
  }
}
