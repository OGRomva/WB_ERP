import {Controller, Get, Post} from '@nestjs/common';
import {OrdersService} from "./orders.service";

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService) {}
    @Post('update')
    update() {
        return this.orderService.updateOrders()
    }

    @Get('get')
    get() {
        return this.orderService.getOrders()
    }
}
