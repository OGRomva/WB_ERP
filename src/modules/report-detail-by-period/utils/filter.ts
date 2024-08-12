import * as dayjs from "dayjs";
import {FinancialReport} from "../financialReport.model";

export const setFilterDate = async (financialReportRepository: typeof FinancialReport, supplierId: number) => {
    const filterDate: FinancialReport = await financialReportRepository.findOne({
        where: {supplierId: supplierId},
        order: [['id', 'DESC']]
    })

    if (filterDate?.date_to) {
        console.log(filterDate?.date_to)
        return dayjs(filterDate?.date_to).add(1, 'day').format('YYYY-MM-DD')
    } else {
        return '2000-01-01'
    }
    // console.log(filterDate?.date_to ? dayjs(filterDate?.date_to).day(0).add(1, 'day').format('YYYY-MM-DD') : dayjs().day(0).add(-6, 'day').format('YYYY-MM-DD'))

    // return filterDate?.date_to ? dayjs(filterDate?.date_to).day(0).add(1, 'day').format('YYYY-MM-DD') : dayjs().day(0).add(-6, 'day').format('YYYY-MM-DD');
}

export const setDateTo = () => {
    console.log(dayjs().day(0).format('YYYY-MM-DD'))

    return dayjs().day(0).format('YYYY-MM-DD')
}

