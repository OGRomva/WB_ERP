import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Orders} from "./orders.model";
import {getOrdersWB} from "./utils/wbRequest";
import {Cron, Interval} from "@nestjs/schedule";

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Orders) private ordersRepository: typeof Orders) {}

    async updateOrders() {
        try {
            await Orders.sync({alter: true});
            const ordersData = await getOrdersWB();
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
    async getOrders() {
        return this.ordersRepository.findAll();
    }

}
