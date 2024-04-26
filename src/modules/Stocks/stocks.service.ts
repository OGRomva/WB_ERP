import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Stocks} from "./stocks.model";
import {getStocksWB} from './utils/wbRequest';
import * as dayjs from "dayjs";
import {SupplierKeys} from "../supplier-key/supplier-key.model";

@Injectable()
export class StocksService {

    constructor(
        @InjectModel(Stocks) private stocksRepository: typeof Stocks,
        @InjectModel(SupplierKeys) private supplierKeysRepository: typeof SupplierKeys
    ) {}

    async updateStocks(test: boolean = false) {
        if (test) {
            console.log('stocks updated')
        } else {
            const suppliers = await this.supplierKeysRepository.findAll();
            for (const supplier of suppliers) {
                await this.stocksRepository.sync({alter: true})
                const stocksData = await getStocksWB(supplier?.apiKey);

                stocksData.forEach((item, index) => {
                    item['dateUpload'] = dayjs().format("YYYY-MM-DD");
                    item['supplierName'] = supplier?.supplierName;
                    this.stocksRepository.build(item).save();
                    console.log(`Готово на: ${Math.round(100 / stocksData.length * index)}%`)
                })
            }
        }

    }

    async getStocks() {
        return this.stocksRepository.findAll();
    }

}
