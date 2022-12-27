import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategotiesService } from './categoties.service';
import { CreateCategotyDto } from './dto/create-categoty.dto';
import { UpdateCategotyDto } from './dto/update-categoty.dto';

@Controller('categoties')
export class CategotiesController {
  constructor(private readonly categotiesService: CategotiesService) {}

  @Post()
  create(@Body() createCategotyDto: CreateCategotyDto) {
    return this.categotiesService.create(createCategotyDto);
  }

  @Get()
  findAll() {
    return this.categotiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categotiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategotyDto: UpdateCategotyDto) {
    return this.categotiesService.update(+id, updateCategotyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categotiesService.remove(+id);
  }
}
