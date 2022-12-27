import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PageOptionsDto } from '../../paginations/page-option.dto';
import { PageDto } from '../../paginations/page.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<CreateUserDto>>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        username: string;
        password: string;
        email: string;
        id: number;
        create_at: Date;
        update_at: Date;
    } & import("./entities/user.entity").User>;
    remove(id: string): Promise<import("./entities/user.entity").User>;
}
