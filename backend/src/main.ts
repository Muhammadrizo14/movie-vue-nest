import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {BadRequestException, ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  let port = 3033
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(
      new ValidationPipe({
        exceptionFactory: (errors) => {
          const errorMessages = {};
          errors.forEach(error => {
            errorMessages[error.property]= Object.values(error.constraints);
          })
          return new BadRequestException(errorMessages);
        }
      })
  );

  await app.listen(port);
  console.log(`service running at port ${port}, http://localhost:${port}/`)
}
bootstrap();
