import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!  my name is laila, 嘿嘿嘿嘿';
  }

  getMyword(): string {
    return 'myword 哈哈哈哈';
  }
}
