export declare class QuestionDto {
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
