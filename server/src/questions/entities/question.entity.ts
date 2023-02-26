import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class QuestionDto {
  /**
   * Question
   * @example "This is sample body"
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  body: string;
}

export type InferenceRunnerChunk = {
  chunkId: string;
  confidence: number;
};

export type InferenceRunnerResponse = {
  chunks: InferenceRunnerChunk[];
};

export type ChunkHolderGenerateTokenResponse = {
  token: string;
};
