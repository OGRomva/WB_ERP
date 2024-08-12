import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Orders} from "./orders.model";
import {setFilterDate} from "./utils/filter";
import {SupplierKeys} from "../supplier-key/supplier-key.model";
import {getOrdersWB} from "./utils/wbRequest";
import {Supplier} from "../suppliers/suppliers.model";
import {KeyCategories} from "../key-categories/key-categories.model";


@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Orders) private ordersRepository: typeof Orders,
        @InjectModel(Supplier) private supplierRep: typeof Supplier
    ) {}

    async updateOrders(test: boolean = true) {
        if (test) {

        } else {
            try {
                await this.ordersRepository.sync({alter: true})
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
                            const data = await getOrdersWB(key.apiKey, await setFilterDate(this.ordersRepository, supplier.id))

                            for (const item of data) {
                                item['supplierId'] = supplier.id
                                await this.ordersRepository.destroy({ where: {srid: item.srid}})
                                await this.ordersRepository.build(item).save();
                            }
                        }
                    }
                }

                console.log('orders was updated')

                return {
                    statusCode: HttpStatus.CREATED,
                    message: 'Orders was successfully updated'
                }
            } catch (e) {
                console.log(e)
                return new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }

    async getOrders() {
        return this.ordersRepository.findAll();
    }

}
