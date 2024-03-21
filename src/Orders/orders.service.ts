import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Orders} from "./orders.model";
import {getOrdersWB} from "./utils/wbRequest";

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Orders) private ordersRepository: typeof Orders) {}

    async updateOrders() {
        try {
            await Orders.sync();
            const ordersData = await getOrdersWB();
            console.log(ordersData);
            ordersData.forEach((item, index) => {
                Orders.build(item).save();
                console.log(`Готово на: ${100 / ordersData.length * index}%`)
            })
        } catch (e) {
            console.error("gfdgd");
        }
    }

    async getOrders() {
        // return this.ordersRepository.findAll();
        console.log(await getOrdersWB());
    }
}
