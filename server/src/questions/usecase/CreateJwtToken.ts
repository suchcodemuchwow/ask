import { Injectable } from '@nestjs/common';
import { IUsecase } from './usecase';
import { HttpService } from '@nestjs/axios';
import {
  ChunkHolderGenerateTokenResponse,
  InferenceRunnerResponse,
  QuestionDto,
} from '../entities/question.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CreateJwtToken implements IUsecase<void> {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async execute() {
    const CHUNK_HOLDER_URL = this.configService.get<string>('CHUNK_HOLDER_URL');

    const CHUNK_HOLDER_API_KEY = this.configService.get<string>(
      'CHUNK_HOLDER_API_KEY',
    );

    const url = `${CHUNK_HOLDER_URL}/auth/generate-token`;

    const response =
      await this.httpService.axiosRef.post<ChunkHolderGenerateTokenResponse>(
        url,
        {},
        {
          headers: {
            accept: 'application/json',
            'X-API-Key': CHUNK_HOLDER_API_KEY,
            'Content-Type': 'application/json',
          },
        },
      );

    return response.data.token;
  }
}
