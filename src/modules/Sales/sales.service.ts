import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Sales} from "./sales.model";
import {getSalesWB} from "./utils/wbRequest";
import {setFilterDate} from "./utils/filter";
import {SupplierKeys} from "../supplier-key/supplier-key.model";
import {KeyCategories} from "../key-categories/key-categories.model";
import {Supplier} from "../suppliers/suppliers.model";

@Injectable()
export class SalesService {
    constructor(
        @InjectModel(Sales) private salesRepository: typeof Sales,
        @InjectModel(Supplier) private supplierRep: typeof Supplier
    ) {}

    async updateSales(test: boolean = false) {
        if (test) {

        } else {
            try {
                await this.salesRepository.sync({alter: true})
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
                            await this.salesRepository.sync({alter: true})
                            const data = await getSalesWB(key.apiKey, await setFilterDate(this.salesRepository, supplier.id))

                            for (const item of data) {
                                item['supplierId'] = supplier.id
                                await this.salesRepository.destroy({ where: {srid: item.srid}})
                                await this.salesRepository.build(item).save()
                            }
                        }
                    }
                }

                console.log('sales was updated')

                return {
                    statusCode: HttpStatus.CREATED,
                    message: 'Sales was successfully updated'
                }
            } catch (e) {
                console.log(e)
                return new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }

    }

    async getSales() {
        return this.salesRepository.findAll();
    }
}
