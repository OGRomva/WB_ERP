import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Orders} from "./orders.model";
import {JwtModule} from "@nestjs/jwt";
import {Supplier} from "../suppliers/suppliers.model";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
      SequelizeModule.forFeature([Orders, Supplier]),
      JwtModule
  ],
  exports: [OrdersService]
})
export class OrdersModule {
}
