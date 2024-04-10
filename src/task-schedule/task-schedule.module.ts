import { Module } from '@nestjs/common';
import { TaskScheduleController } from './task-schedule.controller';
import {OrdersService} from "../Orders/orders.service";
import {ReportDetailByPeriodService} from "../report-detail-by-period/report-detail-by-period.service";
import {SalesService} from "../Sales/sales.service";
import {StocksService} from "../Stocks/stocks.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Orders} from "../Orders/orders.model";
import {FinancialReport} from "../report-detail-by-period/financialReport.model";
import {Stocks} from "../Stocks/stocks.model";
import {Sales} from "../Sales/sales.model";

@Module({
  controllers: [TaskScheduleController],
  providers: [
      OrdersService,
      ReportDetailByPeriodService,
      SalesService,
      StocksService
  ],
    imports: [
        SequelizeModule.forFeature([Orders, Stocks, FinancialReport, Sales]),

    ]

})
export class TaskScheduleModule {}
