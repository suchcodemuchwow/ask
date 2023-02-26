import { IUsecase } from './usecase';
import { HttpService } from '@nestjs/axios';
import { QuestionDto } from '../entities/question.entity';
import { ConfigService } from '@nestjs/config';
export declare class AskQuestion implements IUsecase<QuestionDto> {
    private readonly httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    execute(data: QuestionDto): Promise<import("../entities/question.entity").InferenceRunnerChunk[]>;
}
