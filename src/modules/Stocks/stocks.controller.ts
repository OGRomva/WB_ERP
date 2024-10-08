import {Controller, Get, Post, UseGuards} from '@nestjs/common';
import {StocksService} from "./stocks.service";
import {Roles} from "../../decorators/roles-auth.decorator";
import {RolesGuard} from "../../guards/roles.guard";


@Roles('ADMIN')
@UseGuards(RolesGuard)
@Controller('stocks')
export class StocksController {

    constructor(private stocksService: StocksService) {}

    @Post('update')
    update() {
        return this.stocksService.updateStocks()
    }

    @Get('get')
    get(){
        return this.stocksService.getStocks()
    }
}
