import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Orders} from "./orders.model";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [SequelizeModule.forFeature([Orders])]
})
export class OrdersModule {
}
