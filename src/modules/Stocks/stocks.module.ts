import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Stocks} from "./stocks.model";
import {SupplierKeyService} from "../supplier-key/supplier-key.service";
import {SupplierKeys} from "../supplier-key/supplier-key.model";
import {RolesGuard} from "../../guards/roles.guard";
import {JwtModule, JwtService} from "@nestjs/jwt";

@Module({
  controllers: [StocksController],
  providers: [StocksService, SupplierKeyService, JwtService],
  imports: [
      SequelizeModule.forFeature([Stocks, SupplierKeys])
  ],
  exports: [StocksService]
})
export class StocksModule {}
