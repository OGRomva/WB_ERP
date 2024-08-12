import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {FinancialReport} from "./financialReport.model";
import {getFinancialReportWB} from "./utils/wbRequest";
import {setDateTo, setFilterDate} from "./utils/filter";
import {SupplierKeys} from "../supplier-key/supplier-key.model";
import {Supplier} from "../suppliers/suppliers.model";
import {KeyCategories} from "../key-categories/key-categories.model";
import * as dayjs from "dayjs";
import {HttpStatusCode} from "axios";

@Injectable()
export class ReportDetailByPeriodService {
    constructor(
        @InjectModel(FinancialReport) private financialReportRepository: typeof FinancialReport,
        @InjectModel(Supplier) private supplierRep: typeof Supplier
    ) {}

    async updateFinancialReport(test: boolean = false) {
        if (test) {

        } else {
            try {
                await this.financialReportRepository.sync({alter: true})
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
                            let data: FinancialReport[];
                            let rrd_id = 0;

                            do {
                                const dateFrom = await setFilterDate(this.financialReportRepository, supplier.id);
                                const date_to = setDateTo()
                                data = await getFinancialReportWB(dateFrom, date_to, key.apiKey, rrd_id)
                                console.log(data.length)

                                if (data.length) {
                                    for (const item of data) {
                                        item.supplierId = supplier.id;
                                    }


                                    await this.financialReportRepository.bulkCreate(data)

                                    rrd_id = data[data.length - 1].rrd_id
                                } else {
                                    if (rrd_id === 0) {
                                        console.log({
                                            time: dayjs().format('YYYY-MM-DD HH:mm:sss'),
                                            message: 'Financial report wasn\'t injected. Check Wildberries API or date settings',
                                            supplierId: supplier.id,
                                            supplierName: supplier.supplierName,
                                            date_from: dateFrom,
                                            date_to: date_to
                                        })
                                    }

                                }
                            } while (data.length)

                            break;
                        }
                    }
                }

                return {
                    statusCode: HttpStatus.CREATED,
                    message: 'Orders was successfully updated'
                }

            } catch (e) {
                throw new HttpException(e, HttpStatusCode.InternalServerError)
            }
        }
    }

    async getFinancialReport() {
        try {
            return this.financialReportRepository.findAll();
        } catch (e) {
            console.error(e);
        }
    }
}
