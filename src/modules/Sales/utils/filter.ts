import * as dayjs from "dayjs";
import {Sales} from "../sales.model";


export const setFilterDate = async (salesRepository: typeof Sales) => {
    const lastChangeDate = await salesRepository.findOne({order: [['id', 'DESC']]})

    if (lastChangeDate?.lastChangeDate) {
        return dayjs(lastChangeDate?.lastChangeDate).add(1, 'day').format('YYYY-MM-DD');
    } else {
        return '2000-01-01'
    }
}
