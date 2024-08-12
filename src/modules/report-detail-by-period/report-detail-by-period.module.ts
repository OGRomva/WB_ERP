import { Module } from '@nestjs/common';
import { ReportDetailByPeriodController } from './report-detail-by-period.controller';
import { ReportDetailByPeriodService } from './report-detail-by-period.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {FinancialReport} from "./financialReport.model";
import {JwtModule} from "@nestjs/jwt";
import {Supplier} from "../suppliers/suppliers.model";

@Module({
  controllers: [ReportDetailByPeriodController],
  providers: [ReportDetailByPeriodService],
  imports: [
      SequelizeModule.forFeature([FinancialReport, Supplier]),
      JwtModule
  ],
  exports: [ReportDetailByPeriodService]
})
export class ReportDetailByPeriodModule {}
