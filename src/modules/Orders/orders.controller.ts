import {Controller, Get, Post, UseGuards} from '@nestjs/common';
import {OrdersService} from "./orders.service";
import {Roles} from "../../decorators/roles-auth.decorator";
import {RolesGuard} from "../../guards/roles.guard";

@Roles('SUPPLIER', 'ADMIN')
@UseGuards(RolesGuard)
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
