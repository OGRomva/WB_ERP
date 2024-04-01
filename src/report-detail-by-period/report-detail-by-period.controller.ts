import {Controller, Get, Post} from '@nestjs/common';
import {ReportDetailByPeriodService} from "./report-detail-by-period.service";

@Controller('report')
export class ReportDetailByPeriodController {
    constructor(private reportDetailByPeriodService: ReportDetailByPeriodService) {}

    @Post()
    update() {
        return this.reportDetailByPeriodService.updateFinancialReport();
    }

    @Get()
    get() {
        return this.reportDetailByPeriodService.getFinancialReport();
    }

}
