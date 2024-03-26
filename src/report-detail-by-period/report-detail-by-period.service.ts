import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {FinancialReport} from "./financialReport.model";

@Injectable()
export class ReportDetailByPeriodService {
    constructor(@InjectModel(FinancialReport) private financialReportRepository: typeof FinancialReport) {}

    async updateFinancialReport() {
        try {

        } catch (e) {
            console.error(e);
        }
    }

    async getFinancialReport() {
        try {

        } catch (e) {
            console.error(e);
        }
    }
}
