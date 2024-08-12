import { Module } from '@nestjs/common';
import { KeyCategoriesController } from './key-categories.controller';
import { KeyCategoriesService } from './key-categories.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {KeyCategories} from "./key-categories.model";
import {KeyToCategories} from "../supplier-key/KeyToCategories.model";
import {SupplierKeys} from "../supplier-key/supplier-key.model";

@Module({
  controllers: [KeyCategoriesController],
  providers: [KeyCategoriesService],
  imports: [SequelizeModule.forFeature([KeyCategories, KeyToCategories, SupplierKeys])]
})
export class KeyCategoriesModule {}
