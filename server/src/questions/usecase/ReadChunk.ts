import { Injectable } from '@nestjs/common';
import { IUsecase } from './usecase';
import { HttpService } from '@nestjs/axios';
import { ChunkHolderGenerateTokenResponse } from '../entities/question.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ReadChunk
  implements IUsecase<{ chunkId: string; accessToken: string }>
{
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async execute(data: {
    chunkId: string;
    confidence: number;
    accessToken: string;
  }) {
    const CHUNK_HOLDER_URL = this.configService.get<string>('CHUNK_HOLDER_URL');

    const url = `${CHUNK_HOLDER_URL}/chunks/${data.chunkId}`;

    const answer =
      await this.httpService.axiosRef.get<ChunkHolderGenerateTokenResponse>(
        url,
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: data.accessToken,
          },
        },
      );

    return {
      answer: answer.data,
      chunkId: data.chunkId,
      confidence: data.confidence,
    };
  }
}
