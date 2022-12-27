import { CreateCategotyDto } from './dto/create-categoty.dto';
import { UpdateCategotyDto } from './dto/update-categoty.dto';
import { Categoty } from './entities/categoty.entity';
import { Repository } from 'typeorm';
export declare class CategotiesService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Categoty>);
    create(createCategotyDto: CreateCategotyDto): Promise<Categoty>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCategotyDto: UpdateCategotyDto): string;
    remove(id: number): string;
}
