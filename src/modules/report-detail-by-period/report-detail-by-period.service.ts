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

    async updateFinancialReport(test: boolean = false) {
        try {
            if (test) {

            } else {
                const suppliers = await this.supplierKeysRepository.findAll()
                for (const supplier of suppliers) {
                    await this.financialReportRepository.sync({alter: true})
                    const financialReportData = await getFinancialReportWB(await setFilterDate(this.financialReportRepository), setDateTo(), supplier?.apiKey)
                    console.log(await getFinancialReportWB(await setFilterDate(this.financialReportRepository), setDateTo(), supplier?.apiKey))

                    financialReportData.forEach((item, index) => {
                        item['supplierName'] = supplier?.supplierName;
                        this.financialReportRepository.build(item).save().catch((err) => {
                            console.error(err);
                        })
                        console.log(`Готово на: ${100 / financialReportData.length * index}%`)
                    })
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
