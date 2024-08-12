import * as dayjs from "dayjs";
import {Sales} from "../sales.model";


export const setFilterDate = async (
    salesRepository: typeof Sales,
    supplierId: number
) => {


    const lastChangeDate = await salesRepository.findAll({
        where: {
            supplierId: supplierId
        },
        order: [['id', 'DESC']],
        limit: 1
    })


    if (lastChangeDate[0]?.lastChangeDate) {
        return dayjs(lastChangeDate[0].lastChangeDate).format('YYYY-MM-DD')
    } else {
        return '2000-01-01'
    }
}
