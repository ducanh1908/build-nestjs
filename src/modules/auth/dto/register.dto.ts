import { IsEmail, IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';

export class RegisterDto {


    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

}
