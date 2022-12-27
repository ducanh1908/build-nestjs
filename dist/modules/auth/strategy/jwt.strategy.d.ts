import { Strategy } from 'passport-jwt';
import { LoginDto } from '../dto/login.dto';
declare const JsonWebTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JsonWebTokenStrategy extends JsonWebTokenStrategy_base {
    constructor();
    validate(payload: LoginDto): Promise<{
        name: string;
        email: string;
    }>;
}
export {};
