import { Length } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/modules/product/entities/product.entity';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity('categories')
export class Categoty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(8, 255)
  name: string;

  @OneToMany(() => Product, (product) => product.categories)
  products: Product[];

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
