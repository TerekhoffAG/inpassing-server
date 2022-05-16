import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

/**
 * Класс документации приложения.
 */
export class ApiDocumentation {
  static initialize(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Inpassing server')
      .setDescription('Inpassing server API description')
      .setVersion('0.0.1')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
