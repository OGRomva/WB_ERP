import * as dayjs from "dayjs";
import {FinancialReport} from "../financialReport.model";

export const setFilterDate = async (financialReportRepository: typeof FinancialReport) => {
    const filterDate: FinancialReport | 'nill' = await financialReportRepository.findOne({order: [['id', 'DESC']]})

    console.log(filterDate?.date_to ? dayjs(filterDate?.date_to).day(0).add(1, 'day').format('YYYY-MM-DD') : dayjs().day(0).add(-6, 'day').format('YYYY-MM-DD'))

    return filterDate?.date_to ? dayjs(filterDate?.date_to).day(0).add(1, 'day').format('YYYY-MM-DD') : dayjs().day(0).add(-6, 'day').format('YYYY-MM-DD');
}

export const setDateTo = () => {
    console.log(dayjs().day(0).format('YYYY-MM-DD'))

    return dayjs().day(0).format('YYYY-MM-DD')
}

