import { Categoty } from '../../categoties/entities/categoty.entity';
export declare class Product {
    id: number;
    name: string;
    categories: Categoty;
    create_at: Date;
    update_at: Date;
}
