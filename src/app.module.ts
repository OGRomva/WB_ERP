import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import { StocksModule } from './stocks/stocks.module';
import {Stocks} from "./Stocks/stocks.model";
import { OrdersModule } from './orders/orders.module';
import {Orders} from "./Orders/orders.model";
import { SalesModule } from './sales/sales.module';
import {Sales} from "./Sales/sales.model";

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
            models: [Stocks, Orders, Sales],
            autoLoadModels: true
    }), StocksModule, OrdersModule, SalesModule]

})

export class AppModule {

}