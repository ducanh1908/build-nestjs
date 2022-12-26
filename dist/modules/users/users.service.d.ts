import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PageOptionsDto } from '../../paginations/page-option.dto';
import { PageDto } from '../../paginations/page.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<User>>;
    findOne(id: number): Promise<User>;
    findUsername(username: string): Promise<User>;
    findEmail(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        username: string;
        password: string;
        email: string;
        id: number;
    } & User>;
    remove(id: number): Promise<User>;
}
