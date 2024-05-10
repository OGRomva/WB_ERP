import {Orders} from "../orders.model";
import * as dayjs from "dayjs";

export const setFilterDate = async (ordersRepository: typeof Orders) => {
    const lastChangeDate = await ordersRepository.findOne({order: [['id', 'DESC']]})

    if (lastChangeDate?.lastChangeDate) {
        return dayjs(lastChangeDate?.lastChangeDate).format('YYYY-MM-DD');
    } else {
        return '2000-01-01'
    }
}
