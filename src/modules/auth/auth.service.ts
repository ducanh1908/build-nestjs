import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService, // private jwtService: JwtService
  ) {}
  async validateUser(email:string, password: string): Promise<User| undefined> {
    const user =  await this.userService.getUserByEmail(email) 
    if(!user) throw new BadRequestException()
    if(!await bcrypt.compare(password, user.password))
    throw new UnauthorizedException()
    return user;
  }
  async register(payload: RegisterDto) {
    const user = await this.userService.getUserByName(payload.username);
    if (user) throw new NotFoundException('User already exists');
    const email = await this.userService.getUserByEmail(payload.email);
    if (email) throw new NotFoundException('Email already exists');
    const salt = 10;
    const hashPassword = await bcrypt.hash(payload.password, salt);
    payload.password = hashPassword;
    return await this.userService.create(payload);
  }

  async login(login: LoginDto) {}
}
// generateToken(user: any) {
//   return  {
//     access_token: this.jwtService.sign({
//       name: user.name,
//       sub: user.id
//     })
//   }
// }