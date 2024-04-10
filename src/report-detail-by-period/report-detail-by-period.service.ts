import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {FinancialReport} from "./financialReport.model";
import {getFinancialReportWB} from "./utils/wbRequest";
import {setDateTo, setFilterDate} from "./utils/filter";

@Injectable()
export class ReportDetailByPeriodService {
    constructor(@InjectModel(FinancialReport) private financialReportRepository: typeof FinancialReport) {}

    async updateFinancialReport(test: boolean = true) {
        if (test) {
            console.log(await getFinancialReportWB(await setFilterDate(this.financialReportRepository), setDateTo()))
        } else {
            try {
                await this.financialReportRepository.sync({alter: true});
                const financialReportDate = await getFinancialReportWB(await setFilterDate(this.financialReportRepository), setDateTo())

                financialReportDate.forEach((item, index) => {
                    this.financialReportRepository.build(item).save().catch((err) => {
                        console.error(err);
                    })
                    console.log(`Готово на: ${100 / financialReportDate.length * index}%`)
                })

            } catch (e) {
                console.error(e);
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
