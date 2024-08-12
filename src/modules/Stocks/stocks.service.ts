import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Stocks} from "./stocks.model";
import {getStocksWB} from './utils/wbRequest';
import * as dayjs from "dayjs";
import {SupplierKeys} from "../supplier-key/supplier-key.model";
import {KeyCategories} from "../key-categories/key-categories.model";
import {Supplier} from "../suppliers/suppliers.model";

@Injectable()
export class StocksService {

    constructor(
        @InjectModel(Stocks) private stocksRepository: typeof Stocks,
        @InjectModel(Supplier) private supplierRep: typeof Supplier
    ) {}

    async updateStocks(test: boolean = false) {
        if (test) {

        } else {
            try {
                await this.stocksRepository.sync({alter: true})
                const suppliers = await this.supplierRep.findAll({
                    include: [{
                        model: SupplierKeys,
                        include: [{
                            model: KeyCategories,
                            where: {
                                value: 'Статистика',
                            }
                        }]
                    }]
                })

                for (const supplier of suppliers) {
                    if (supplier.keys.length) {
                        for (const key of supplier.keys) {
                            const data = await getStocksWB(key.apiKey);

                            for (const item of data) {
                                item['supplierId'] = supplier.id
                                item['dateUpload'] = dayjs().format('YYYY-MM-DD HH:mm:ss')

                                await this.stocksRepository.create(item)
                            }
                        }
                    }
                }

                return {
                    statusCode: HttpStatus.CREATED,
                    message: 'Stocks was successfully updated',
                }
            } catch (e) {
                throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }

    }

    async getStocks() {
        return this.stocksRepository.findAll();
    }

}
