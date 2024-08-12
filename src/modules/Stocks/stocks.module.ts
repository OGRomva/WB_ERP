import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Stocks} from "./stocks.model";
import {Supplier} from "../suppliers/suppliers.model";

@Module({
  controllers: [StocksController],
  providers: [StocksService],
  imports: [
      SequelizeModule.forFeature([Stocks, Supplier])
  ],
  exports: [StocksService]
})
export class StocksModule {}
