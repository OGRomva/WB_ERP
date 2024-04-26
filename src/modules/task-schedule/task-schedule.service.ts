import { Injectable } from '@nestjs/common';
import {SalesService} from "../Sales/sales.service";
import {StocksService} from "../Stocks/stocks.service";
import {OrdersService} from "../Orders/orders.service";
import {ReportDetailByPeriodService} from "../report-detail-by-period/report-detail-by-period.service";
import {Cron} from "@nestjs/schedule";

@Injectable()
export class TaskScheduleService {
    constructor(
        private salesService: SalesService,
        private stocksService: StocksService,
        private ordersService: OrdersService,
        private reportDetailByPeriodService: ReportDetailByPeriodService
    ) {}

    @Cron('0 00 00 * * *')
    async updateTablesOncePerDay() {
        await this.salesService.updateSales();
        await this.ordersService.updateOrders();
        await this.stocksService.updateStocks();
    }

    @Cron('0 55 23 * * 1')
    async updateTablesOncePerWeek() {
        await this.reportDetailByPeriodService.updateFinancialReport();
    }
}
