import {Controller, Get, Post} from '@nestjs/common';
import {OrdersService} from "./orders.service";
import {getOrdersWB} from "./utils/wbRequest";

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService) {}
    @Post()
    update() {
        return this.orderService.updateOrders()
    }

    @Get()
    get() {
        return this.orderService.getOrders()
    }
}
