import { Module } from '@nestjs/common';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Supplier} from "./suppliers.model";
import {User} from "../user/user.model";

@Module({
  controllers: [SuppliersController],
  providers: [SuppliersService],
  imports: [SequelizeModule.forFeature([Supplier, User])]
})
export class SuppliersModule {}
