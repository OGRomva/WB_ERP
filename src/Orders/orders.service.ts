import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Orders} from "./orders.model";
import {getOrdersWB} from "./utils/wbRequest";
import {setFilterDate} from "./utils/filter";

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Orders) private ordersRepository: typeof Orders) {}

    async updateOrders(test: boolean = false) {
        if (test) {
            console.log(await getOrdersWB(await setFilterDate(this.ordersRepository)))
        } else {
            try {
                const ordersData = await getOrdersWB(await setFilterDate(this.ordersRepository))

                await this.ordersRepository.sync({alter: true});
                ordersData.forEach((item, index) => {
                    Orders.build(item).save().catch((err) => {
                        console.error(err)
                    });
                    console.log(`Готово на: ${100 / ordersData.length * index}%`)
                })
                console.log('orders was updated')

            } catch (e) {
                console.error(e);
            }
        }
    }
    async getOrders() {
        return this.ordersRepository.findAll();
    }

}
