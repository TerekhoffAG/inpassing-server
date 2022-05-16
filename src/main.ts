import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiDocumentation } from './utils/api-documentation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Инициализация документации приложения.
  ApiDocumentation.initialize(app);

  await app.listen(3000);
}
bootstrap();
