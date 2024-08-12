import {Orders} from "../orders.model";
import * as dayjs from "dayjs";

export const setFilterDate = async (
    ordersRepository: typeof Orders,
    supplierId: number
) => {

    const lastChangeDate = await ordersRepository.findAll({
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
