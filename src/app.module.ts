import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import { StocksModule } from './stocks/stocks.module';
import {Stocks} from "./Stocks/stocks.model";
import { OrdersModule } from './orders/orders.module';
import {Orders} from "./Orders/orders.model";
import { ReportDetailByPeriodModule } from './report-detail-by-period/report-detail-by-period.module';
import {FinancialReport} from "./report-detail-by-period/financialReport.model";
import { SalesModule } from './sales/sales.module';
import {Sales} from "./Sales/sales.model";
import { TaskScheduleModule } from './task-schedule/task-schedule.module';
import {ScheduleModule} from "@nestjs/schedule";
import {TimeoutError} from "sequelize";
import { SupplierKeyModule } from './supplier-key/supplier-key.module';
import {SupplierKeys} from "./supplier-key/supplier-key.model";



@Module({
    controllers : [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username:  process.env.POSTGRES_USER,
            password:  String(process.env.POSTGRES_PASSWORD),
            database:  process.env.POSTGRES_DB,
            models: [Stocks, Orders, Sales, FinancialReport, SupplierKeys],
            autoLoadModels: true,
            retry: {
                match: [/Deadlock/i, TimeoutError], // Retry on connection errors
                max: 3, // Maximum retry 3 times
                backoffBase: 3000, // Initial backoff duration in ms. Default: 100,
                backoffExponent: 1.5,
            }
    }), StocksModule, OrdersModule, SalesModule, ReportDetailByPeriodModule, TaskScheduleModule,
        ScheduleModule.forRoot(),
        SupplierKeyModule
    ]

})

export class AppModule {

}