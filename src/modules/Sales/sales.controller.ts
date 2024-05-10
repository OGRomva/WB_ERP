import {Controller, Get, Post, UseGuards} from '@nestjs/common';
import {SalesService} from "./sales.service";
import {Roles} from "../../decorators/roles-auth.decorator";
import {RolesGuard} from "../../guards/roles.guard";

@Roles('ADMIN')
@UseGuards(RolesGuard)
@Controller('sales')
export class SalesController {
    constructor(private salesService: SalesService) {}

    @Post('update')
    update() {
        return this.salesService.updateSales();
    }

    @Get('get')
    get() {
        return this.salesService.getSales();
    }
}
