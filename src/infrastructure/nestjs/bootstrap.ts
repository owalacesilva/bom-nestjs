import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/application';

const bootstrap = async (): => {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(3000);
};

await bootstrap();