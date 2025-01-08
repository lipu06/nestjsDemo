import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getMyword(): string;
    getMyword3(): {
        name: string;
        age: number;
    };
}
