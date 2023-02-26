"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
function setupSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Blog api template')
        .setDescription('The blogs api')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
}
(async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix('api');
    app.enableCors({ credentials: true, origin: '*' });
    config_1.ConfigModule.forRoot({ isGlobal: true });
    setupSwagger(app);
    await app.listen(3000);
})();
//# sourceMappingURL=main.js.map