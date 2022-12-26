import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private userService;
    constructor(userService: UsersService);
    register(payload: RegisterDto): Promise<import("../users/entities/user.entity").User>;
    login(login: LoginDto): Promise<void>;
}
