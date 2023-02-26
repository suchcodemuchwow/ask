import { IUsecase } from './usecase';
import { HttpService } from '@nestjs/axios';
import { ChunkHolderGenerateTokenResponse } from '../entities/question.entity';
import { ConfigService } from '@nestjs/config';
export declare class ReadChunk implements IUsecase<{
    chunkId: string;
    accessToken: string;
}> {
    private readonly httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    execute(data: {
        chunkId: string;
        confidence: number;
        accessToken: string;
    }): Promise<{
        answer: ChunkHolderGenerateTokenResponse;
        chunkId: string;
        confidence: number;
    }>;
}
