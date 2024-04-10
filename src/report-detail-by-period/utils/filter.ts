import * as dayjs from "dayjs";
import {FinancialReport} from "../financialReport.model";

export const setFilterDate = async (financialReportRepository: typeof FinancialReport) => {
    const filterDate: FinancialReport | 'nill' = await financialReportRepository.findOne({order: [['id', 'DESC']]})
    console.log(
        filterDate?.date_to ?
            filterDate?.date_to
            :
            '2024-03-01'
            // dayjs().day(0).add(-7, 'day').format('YYYY-MM-DD')
    )
    return filterDate?.date_to ? filterDate?.date_to : dayjs().day(0).add(-7, 'day').format('YYYY-MM-DD');
}

export const setDateTo = () => {
    console.log(dayjs().day(0).format('YYYY-MM-DD'))
    return dayjs().day(0).format('YYYY-MM-DD')
}

