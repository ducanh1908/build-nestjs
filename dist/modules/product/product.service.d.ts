import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Categoty } from '../categoties/entities/categoty.entity';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    create(product: CreateProductDto, category: Categoty): Promise<CreateProductDto & Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): string;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
