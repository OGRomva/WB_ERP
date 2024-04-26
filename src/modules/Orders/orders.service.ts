import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Orders} from "./orders.model";
import {setFilterDate} from "./utils/filter";
import {SupplierKeys} from "../supplier-key/supplier-key.model";
import {getOrdersWB} from "./utils/wbRequest";

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Orders) private ordersRepository: typeof Orders,
        @InjectModel(SupplierKeys) private supplierKeysRepository: typeof SupplierKeys
    ) {}

    async updateOrders(test: boolean = false) {
        if (test) {
            console.log("orders updated")
        } else {
            try {
                const suppliers = await this.supplierKeysRepository.findAll();
                for (const supplier of suppliers) {
                    await this.ordersRepository.sync({alter: true})
                    const ordersData = await getOrdersWB(supplier?.apiKey, await setFilterDate(this.ordersRepository));

                    ordersData.forEach((item, index) => {
                        item['supplierName'] = supplier?.supplierName;
                        this.ordersRepository.build(item).save();
                        console.log(`Готово на: ${Math.round(100 / ordersData.length * index)}%`)
                    })
                }

            } catch (e) {
                console.error(e);
            }
        }
    }
    async getOrders() {
        return this.ordersRepository.findAll();
    }

}