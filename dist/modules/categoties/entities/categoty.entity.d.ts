import { Product } from 'src/modules/product/entities/product.entity';
export declare class Categoty {
    id: number;
    name: string;
    products: Product[];
    create_at: Date;
    update_at: Date;
}
