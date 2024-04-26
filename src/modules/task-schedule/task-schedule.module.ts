import { Module } from '@nestjs/common';
import { TaskScheduleController } from './task-schedule.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Orders} from "../Orders/orders.model";
import {Stocks} from "../Stocks/stocks.model";
import {FinancialReport} from "../report-detail-by-period/financialReport.model";
import {Sales} from "../Sales/sales.model";
import {SupplierKeys} from "../supplier-key/supplier-key.model";
import {TaskScheduleService} from "./task-schedule.service";
import {OrdersModule} from "../Orders/orders.module";
import {ReportDetailByPeriodModule} from "../report-detail-by-period/report-detail-by-period.module";
import {SalesModule} from "../Sales/sales.module";
import {StocksModule} from "../Stocks/stocks.module";

@Module({
    controllers: [TaskScheduleController],
    imports: [
        SequelizeModule.forFeature([Orders, Stocks, FinancialReport, Sales, SupplierKeys]),
        OrdersModule,
        ReportDetailByPeriodModule,
        SalesModule,
        StocksModule
    ],
    providers: [
        TaskScheduleService
    ]

})
export class TaskScheduleModule {}
