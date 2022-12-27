import { Injectable } from '@nestjs/common';
import { CreateCategotyDto } from './dto/create-categoty.dto';
import { UpdateCategotyDto } from './dto/update-categoty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoty } from './entities/categoty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategotiesService {
  constructor(
    @InjectRepository(Categoty)
    private categoryRepository: Repository<Categoty>
  ){}
  create(createCategotyDto: CreateCategotyDto) {
    const category = this.categoryRepository.create(createCategotyDto)
    return this.categoryRepository.save(category)
  }

  findAll() {
    return `This action returns all categoties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoty`;
  }

  update(id: number, updateCategotyDto: UpdateCategotyDto) {
    return `This action updates a #${id} categoty`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoty`;
  }
}
