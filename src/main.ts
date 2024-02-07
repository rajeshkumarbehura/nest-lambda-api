import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const log = new Logger();
    await app.listen(3000);
    log.localInstance.log("Server running on port : 3000")
}

bootstrap();
