import { QuestionDto } from './entities/question.entity';
import * as Usecases from './usecase';
export declare class QuestionsController {
    private askQuestionUsecase;
    private createAccessTokenUsecase;
    private readChunkUsecase;
    private readonly logger;
    constructor(askQuestionUsecase: Usecases.AskQuestion, createAccessTokenUsecase: Usecases.CreateJwtToken, readChunkUsecase: Usecases.ReadChunk);
    ask(questionDto: QuestionDto): Promise<{
        data: {
            answer: import("./entities/question.entity").ChunkHolderGenerateTokenResponse;
            chunkId: string;
            confidence: number;
        }[];
    }>;
}
