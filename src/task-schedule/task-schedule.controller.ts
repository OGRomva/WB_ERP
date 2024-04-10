import {Controller, Post} from '@nestjs/common';
import {StocksService} from "../Stocks/stocks.service";
import {OrdersService} from "../Orders/orders.service";
import {ReportDetailByPeriodService} from "../report-detail-by-period/report-detail-by-period.service";
import {SalesService} from "../Sales/sales.service";
import {Cron} from "@nestjs/schedule";

@Controller()
export class TaskScheduleController {
    constructor(
        private stocksService: StocksService,
        private ordersService: OrdersService,
        private reportDetailByPeriod: ReportDetailByPeriodService,
        private salesService: SalesService,
    ) {}
    @Post()
    @Cron('0 00 00 * * *')
    updateTablesOncePerDay() {
        // this.salesService.updateSales();
        this.ordersService.updateOrders();
        // this.stocksService.updateStocks();

        return;
    }

    @Post()
    updateTablesOncePerWeek() {

    }
}
