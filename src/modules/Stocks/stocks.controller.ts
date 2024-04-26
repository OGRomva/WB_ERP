import {Body, Controller, Get, Post} from '@nestjs/common';
import {StocksService} from "./stocks.service";

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
