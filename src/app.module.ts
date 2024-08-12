import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {ScheduleModule} from "@nestjs/schedule";
import {TimeoutError} from "sequelize";
import {Sales} from "./modules/Sales/sales.model";
import {SalesModule} from "./modules/Sales/sales.module";
import {Stocks} from "./modules/Stocks/stocks.model";
import {Orders} from "./modules/Orders/orders.model";
import {FinancialReport} from "./modules/report-detail-by-period/financialReport.model";
import {SupplierKeys} from "./modules/supplier-key/supplier-key.model";
import {User} from "./modules/user/user.model";
import {Role} from "./modules/roles/role.model";
import {UserRoles} from "./modules/roles/user-roles.model";
import {StocksModule} from "./modules/Stocks/stocks.module";
import {OrdersModule} from "./modules/Orders/orders.module";
import {ReportDetailByPeriodModule} from "./modules/report-detail-by-period/report-detail-by-period.module";
import {TaskScheduleModule} from "./modules/task-schedule/task-schedule.module";
import {SupplierKeyModule} from "./modules/supplier-key/supplier-key.module";
import {AuthModule} from "./modules/auth/auth.module";
import {UserModule} from "./modules/user/user.module";
import {RolesModule} from "./modules/roles/roles.module";
import {Supplier} from "./modules/suppliers/suppliers.model";
import {KeyCategories} from "./modules/key-categories/key-categories.model";
import {KeyToCategories} from "./modules/supplier-key/KeyToCategories.model";
import {KeyCategoriesModule} from "./modules/key-categories/key-categories.module";
import {SuppliersModule} from "./modules/suppliers/suppliers.module";

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
            models: [Stocks, Orders, Sales, FinancialReport, SupplierKeys, User, Role, UserRoles, Supplier, KeyCategories, KeyToCategories],
            timezone: '+03:00',
            autoLoadModels: true,
            logging: false,

            retry: {
                match: [/Deadlock/i, TimeoutError], // Retry on connection errors
                max: 3, // Maximum retry 3 times
                backoffBase: 3000, // Initial backoff duration in ms. Default: 100,
                backoffExponent: 1.5,
            }
        }),

        StocksModule,
        OrdersModule,
        SalesModule,
        ReportDetailByPeriodModule,
        TaskScheduleModule,
        ScheduleModule.forRoot(),
        SupplierKeyModule,
        AuthModule,
        UserModule,
        RolesModule,
        KeyCategoriesModule,
        SuppliersModule
    ],

})

export class AppModule {

}