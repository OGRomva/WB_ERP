import {Controller, Get, Post} from '@nestjs/common';
import {SalesService} from "./sales.service";


@Controller('sales')
export class SalesController {
    constructor(private salesService: SalesService) {}


    @Post()
    update() {
        return this.salesService.updateSales();
    }

    @Get()
    get() {
        return this.salesService.getSales();
    }
}
