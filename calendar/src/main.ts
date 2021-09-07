import { AuthService } from '@app/core/calendar/auth/auth.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(authService: AuthService) {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: false,
  });
  app.setGlobalPrefix('/api/v1');
  app.use(async (req, res, next) => {
    if (!!process.env.BYPASSAUTH) {
      authService
        .verifyToken(req.headers.authorization.split(' ')[1])
        .then(async (resp: any) => {
          req.tokenData = {
            subjectId: resp.id,
          };
          next();
        })
        .catch((err) => {
          res.status(403);
          res.send();
        });
    } else {
      req.tokenData = {
        subjectId: 'c7128a0e-7810-49d5-b332-c0e3af25ea1c',
      };
      next();
    }
  });
  await app.listen(3000);
}
bootstrap(new AuthService());
