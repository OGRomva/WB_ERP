import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {FinancialReport} from "./financialReport.model";
import {getFinancialReportWB} from "./utils/wbRequest";

@Injectable()
export class ReportDetailByPeriodService {
    constructor(@InjectModel(FinancialReport) private financialReportRepository: typeof FinancialReport) {}

    async updateFinancialReport() {
        try {
            await FinancialReport.sync({alter: true});
            const financialReportDate = await getFinancialReportWB("2024-01-22", "2024-01-29")

            financialReportDate.forEach((item, index) => {
                FinancialReport.build(item).save().catch((err) => {
                    console.error(err);
                })
                console.log(`Готово на: ${100 / financialReportDate.length * index}%`)
            })

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
