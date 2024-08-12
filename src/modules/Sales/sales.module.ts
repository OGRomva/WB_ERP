import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Sales} from "./sales.model";
import {Supplier} from "../suppliers/suppliers.model";

@Module({
  controllers: [SalesController],
  exports: [SalesService],
  imports: [SequelizeModule.forFeature([Sales, Supplier])],
  providers: [SalesService]
})
export class SalesModule {}
