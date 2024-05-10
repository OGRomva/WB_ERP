import { Module } from '@nestjs/common';
import { ReportDetailByPeriodController } from './report-detail-by-period.controller';
import { ReportDetailByPeriodService } from './report-detail-by-period.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {FinancialReport} from "./financialReport.model";
import {SupplierKeys} from "../supplier-key/supplier-key.model";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [ReportDetailByPeriodController],
  providers: [ReportDetailByPeriodService],
  imports: [
      SequelizeModule.forFeature([FinancialReport, SupplierKeys]),
      JwtModule
  ],
  exports: [ReportDetailByPeriodService]
})
export class ReportDetailByPeriodModule {}
