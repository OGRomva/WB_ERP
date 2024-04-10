import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Sales} from "./sales.model";

@Module({
  controllers: [SalesController],
  providers: [SalesService],
  imports: [SequelizeModule.forFeature([Sales])],
  exports: [SalesService]
})
export class SalesModule {}
