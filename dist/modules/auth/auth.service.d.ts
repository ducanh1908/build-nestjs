import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private userService;
    constructor(userService: UsersService);
    validateUser(email: string, password: string): Promise<User | undefined>;
    register(payload: RegisterDto): Promise<User>;
    login(login: LoginDto): Promise<void>;
}
