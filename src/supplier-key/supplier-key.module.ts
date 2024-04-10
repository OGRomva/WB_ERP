import { Module } from '@nestjs/common';
import { SupplierKeyController } from './supplier-key.controller';
import { SupplierKeyService } from './supplier-key.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {SupplierKeys} from "./supplier-key.model";

@Module({
  controllers: [SupplierKeyController],
  providers: [SupplierKeyService],
  imports: [SequelizeModule.forFeature([SupplierKeys])]
})
export class SupplierKeyModule {}
