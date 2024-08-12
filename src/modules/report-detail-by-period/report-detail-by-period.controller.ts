import {Controller, Get, Post, UseGuards} from '@nestjs/common';
import {ReportDetailByPeriodService} from "./report-detail-by-period.service";
import {Roles} from "../../decorators/roles-auth.decorator";
import {RolesGuard} from "../../guards/roles.guard";

@Roles('ADMIN')
@UseGuards(RolesGuard)
@Controller('financialReport')
export class ReportDetailByPeriodController {
    constructor(private reportDetailByPeriodService: ReportDetailByPeriodService) {}

    @Post('update')
    update() {
        return this.reportDetailByPeriodService.updateFinancialReport();
    }

    @Get()
    get() {
        return this.reportDetailByPeriodService.getFinancialReport();
    }

}
