import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Sales} from "./sales.model";
import {getSalesWB} from "./utils/wbRequest";
import {setFilterDate} from "./utils/filter";
import {SupplierKeys} from "../supplier-key/supplier-key.model";

@Injectable()
export class SalesService {
    constructor(
        @InjectModel(Sales) private salesRepository: typeof Sales,
        @InjectModel(SupplierKeys) private supplierKeysRepository: typeof SupplierKeys
    ) {}

    async updateSales(test: boolean = false) {
        try {
            if (test) {
                console.log('sales updated')
            } else {
                const suppliers = await this.supplierKeysRepository.findAll();
                for (const supplier of suppliers) {
                    await this.salesRepository.sync({alter: true})
                    const salesData = await getSalesWB(supplier?.apiKey, await setFilterDate(this.salesRepository));
                    salesData.forEach((item, index) => {
                        item['supplierName'] = supplier?.supplierName;
                        this.salesRepository.build(item).save();
                        console.log(`Готово на: ${Math.round(100 / salesData.length * index)}%`)
                    })
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    async getSales() {
        return this.salesRepository.findAll();
    }
}
