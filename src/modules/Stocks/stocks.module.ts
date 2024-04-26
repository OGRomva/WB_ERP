import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Stocks} from "./stocks.model";
import {SupplierKeyService} from "../supplier-key/supplier-key.service";
import {SupplierKeys} from "../supplier-key/supplier-key.model";

@Module({
  controllers: [StocksController],
  providers: [StocksService, SupplierKeyService],
  imports: [SequelizeModule.forFeature([Stocks, SupplierKeys])],
  exports: [StocksService]
})
export class StocksModule {}
