import { Controller, Get } from '@nestjs/common';
import { IsPublic } from './auth/decorators';

@IsPublic()
@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return { status: 'ok', message: 'API funcionando correctamente!' };
  }

  @Get('/hello')
  getHello(): string {
    return 'Hola Mundo!';
  }
}
