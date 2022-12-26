import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(registerDto: RegisterDto): Promise<import("../users/entities/user.entity").User>;
}
