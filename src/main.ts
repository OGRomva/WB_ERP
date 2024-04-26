import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";
import {JwtService} from "@nestjs/jwt";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const swaggerConfig = new DocumentBuilder()
        .setTitle('База данных Wildberries')
        .setDescription('REST API Documentation')
        .setVersion('0.0.1')
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('/api/docs', app, document);
    app.useGlobalGuards(new JwtAuthGuard(new JwtService()))

    await app.listen(PORT, () => console.log('server was started on PORT = ', PORT));
}

start();