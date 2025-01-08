import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('myword')
  getMyword(): string {
    return this.appService.getMyword();
  }

  @Get('myword3')
  getMyword3(): { name: string; age: number } {
    return {
      name: 'lila',
      age: 18,
    };
  }
}
