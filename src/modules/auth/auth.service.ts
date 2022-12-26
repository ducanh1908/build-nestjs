import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private userService: UsersService,
    // private jwtService: JwtService
    ) {}

  async register(payload: RegisterDto) {
    const user = await this.userService.findUsername(payload.username);
    const email = await this.userService.findUsername(payload.username);
 
    const salt = 10;
    const hashPassword = await bcrypt.hash(payload.password, salt);
    payload.password = hashPassword;
    return await this.userService.create(payload);
  }

  async login(login :LoginDto ) {



  }

}
