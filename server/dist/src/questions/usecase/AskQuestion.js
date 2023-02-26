"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AskQuestion = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
let AskQuestion = class AskQuestion {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    async execute(data) {
        const INFERENCE_RUNNER_URL = this.configService.get('INFERENCE_RUNNER_URL');
        const INFERENCE_RUNNER_API_KEY = this.configService.get('INFERENCE_RUNNER_API_KEY');
        const response = await this.httpService.axiosRef.post(INFERENCE_RUNNER_URL, { question: data.body }, {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': INFERENCE_RUNNER_API_KEY,
            },
        });
        return response.data.chunks;
    }
};
AskQuestion = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], AskQuestion);
exports.AskQuestion = AskQuestion;
//# sourceMappingURL=AskQuestion.js.map