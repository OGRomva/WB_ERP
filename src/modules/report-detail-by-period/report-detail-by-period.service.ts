import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {FinancialReport} from "./financialReport.model";
import {getFinancialReportWB} from "./utils/wbRequest";
import {setDateTo, setFilterDate} from "./utils/filter";
import {SupplierKeys} from "../supplier-key/supplier-key.model";

@Injectable()
export class ReportDetailByPeriodService {
    constructor(
        @InjectModel(FinancialReport) private financialReportRepository: typeof FinancialReport,
        @InjectModel(SupplierKeys) private supplierKeysRepository: typeof SupplierKeys
    ) {}

    async updateFinancialReport(test: boolean = true) {
        try {
            if (test) {

            } else {
                const suppliers = await this.supplierKeysRepository.findAll()

                for (const supplier of suppliers) {

                    let FRData
                    let rrd_id = 0

                    do {
                        FRData = await getFinancialReportWB(await setFilterDate(this.financialReportRepository), setDateTo(), supplier?.apiKey, rrd_id)
                        console.log(`количество говна: ${FRData.length}`)

                        if (FRData) {
                            FRData.forEach((item, index) => {
                                item['supplierName'] = supplier?.supplierName;
                                this.financialReportRepository.build(item).save().catch((err) => {
                                    console.error(err);
                                })
                                console.log(`Готово на: ${Math.round(100 / FRData.length * index)}%`)
                            })

                            const lastItem = FRData[FRData.length - 1]
                            rrd_id = lastItem?.rrd_id
                        } else {
                            console.log('говно не пришло')
                        }
                    } while (FRData.length > 0)
                    console.log('financial report was injected')
                }
            }
        } catch (e) {
            console.error(e);
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
