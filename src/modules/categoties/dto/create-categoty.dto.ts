import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCategotyDto {
    @IsNotEmpty()
    @IsString()
    name:string
}
