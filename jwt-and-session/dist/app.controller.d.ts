import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    private jwtService;
    ttt(authorization: string, response: Response): any;
    sss(session: any): any;
    getHello(): string;
}
