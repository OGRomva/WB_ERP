import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Sales} from "./sales.model";
import {getSalesWB} from "./utils/wbRequest";
import {setFilterDate} from "./utils/filter";

@Injectable()
export class SalesService {
    constructor(@InjectModel(Sales) private salesRepository: typeof Sales) {}

    async updateSales() {
        try {
            await Sales.sync({alter: true});
            const salesData = await getSalesWB(await setFilterDate(this.salesRepository));

            salesData.forEach((item, index) => {
                Sales.build(item).save().catch((err) => {
                    console.error(err)
                });
                console.log(`Готово на: ${100 / salesData.length * index}%`)
            })
            console.log('sales was updated')
        } catch (e) {
            console.error(e);
        }
    }

    async getSales() {
        return this.salesRepository.findAll();
    }
}
