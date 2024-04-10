import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Stocks} from "./stocks.model";
import {getStocksWB} from './utils/wbRequest';
import * as dayjs from "dayjs";



@Injectable()
export class StocksService {

    constructor(@InjectModel(Stocks) private stocksRepository: typeof Stocks) {}

    async updateStocks() {
        await Stocks.sync({alter: true})
        const stocksData = await getStocksWB();
        stocksData.forEach((item, index) => {
            item['dateUpload'] = dayjs().format("YYYY-MM-DD");
            Stocks.build(item).save();
            console.log(`Готово на: ${100 / stocksData.length * index}%`)
        });

    }

    async getStocks() {
        return this.stocksRepository.findAll();
    }

}
