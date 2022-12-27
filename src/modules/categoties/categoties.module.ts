import { Module } from '@nestjs/common';
import { CategotiesService } from './categoties.service';
import { CategotiesController } from './categoties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoty } from './entities/categoty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoty])] ,
  controllers: [CategotiesController],
  providers: [CategotiesService]
})
export class CategotiesModule {}
