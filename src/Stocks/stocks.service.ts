import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Stocks} from "./stocks.model";
import {getStocksWB} from './utils/wbRequest';
import {Cron} from "@nestjs/schedule";



@Injectable()
export class StocksService {

    constructor(@InjectModel(Stocks) private stocksRepository: typeof Stocks) {}

    @Cron('0 00 00 * * 1-7')
    async updateStocks() {
        await Stocks.sync({alter: true})
        const stocksData = await getStocksWB();
        stocksData.forEach((item, index) => {
            Stocks.build(item).save();
            console.log(`Готово на: ${100 / stocksData.length * index}%`)
        });

    }

    async getStocks() {
        return this.stocksRepository.findAll();
    }

}
