import { Module } from '@nestjs/common';
import { SupplierKeyController } from './supplier-key.controller';
import { SupplierKeyService } from './supplier-key.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {SupplierKeys} from "./supplier-key.model";
import {AuthModule} from "../auth/auth.module";
import {KeyCategories} from "../key-categories/key-categories.model";
import {KeyToCategories} from "./KeyToCategories.model";

@Module({
  controllers: [SupplierKeyController],
  providers: [SupplierKeyService],
  imports: [SequelizeModule.forFeature([SupplierKeys, KeyCategories, KeyToCategories]), AuthModule],
  exports: [SupplierKeyService]
})
export class SupplierKeyModule {}
