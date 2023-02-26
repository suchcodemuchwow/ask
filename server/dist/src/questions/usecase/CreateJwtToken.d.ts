import { IUsecase } from './usecase';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class CreateJwtToken implements IUsecase<void> {
    private readonly httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    execute(): Promise<string>;
}
