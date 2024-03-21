import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Stocks} from "./stocks.model";

@Module({
  controllers: [StocksController],
  providers: [StocksService],
  imports: [SequelizeModule.forFeature([Stocks])],
})
export class StocksModule {}
