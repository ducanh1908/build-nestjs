import { CategotiesService } from './categoties.service';
import { CreateCategotyDto } from './dto/create-categoty.dto';
import { UpdateCategotyDto } from './dto/update-categoty.dto';
export declare class CategotiesController {
    private readonly categotiesService;
    constructor(categotiesService: CategotiesService);
    create(createCategotyDto: CreateCategotyDto): Promise<import("./entities/categoty.entity").Categoty>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCategotyDto: UpdateCategotyDto): string;
    remove(id: string): string;
}
