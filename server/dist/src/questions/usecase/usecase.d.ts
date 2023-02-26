export declare abstract class IUsecase<T> {
    abstract execute(data: Partial<T>): any;
}
