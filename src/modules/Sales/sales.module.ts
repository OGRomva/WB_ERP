import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Sales} from "./sales.model";
import {SupplierKeys} from "../supplier-key/supplier-key.model";

@Module({
  controllers: [SalesController],
  exports: [SalesService],
  imports: [SequelizeModule.forFeature([Sales, SupplierKeys])],
  providers: [SalesService]
})
export class SalesModule {}
