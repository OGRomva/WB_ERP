import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Orders} from "./orders.model";
import {SupplierKeys} from "../supplier-key/supplier-key.model";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [SequelizeModule.forFeature([Orders, SupplierKeys])],
  exports: [OrdersService]
})
export class OrdersModule {
}
