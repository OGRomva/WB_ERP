import { Module } from '@nestjs/common';
import { SupplierKeyController } from './supplier-key.controller';
import { SupplierKeyService } from './supplier-key.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {SupplierKeys} from "./supplier-key.model";
import {JwtAuthGuard} from "../../guards/jwt-auth.guard";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [SupplierKeyController],
  providers: [SupplierKeyService],
  imports: [SequelizeModule.forFeature([SupplierKeys]), AuthModule],
  exports: []
})
export class SupplierKeyModule {}
