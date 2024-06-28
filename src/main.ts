import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticatedSocketAdapter } from './sockets/authenticated-socket.adapter';

const port = 7646;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new AuthenticatedSocketAdapter(app));
  await app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
  });
}
bootstrap();
