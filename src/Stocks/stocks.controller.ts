import {Body, Controller, Get, Post} from '@nestjs/common';
import {StocksService} from "./stocks.service";

@Controller('stocks')
export class StocksController {

    constructor(private stocksService: StocksService) {}

    @Post()
    update() {
        return this.stocksService.updateStocks()
    }

    @Get()
    get(){
        return this.stocksService.getStocks()
    }



}
