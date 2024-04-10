import {Orders} from "../orders.model";
import * as dayjs from "dayjs";

export const setFilterDate = async (ordersRepository: typeof Orders) => {
    const filterDate = await ordersRepository.findOne({order: [['id', 'DESC']]}).catch((err) => {
        console.error(err);
        return null;
    })
    return filterDate instanceof Orders ? filterDate?.createdAt : dayjs().add(-1, 'day').format('YYYY-MM-DD');
}
