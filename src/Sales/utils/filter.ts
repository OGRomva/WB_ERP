import * as dayjs from "dayjs";
import {Sales} from "../sales.model";


export const setFilterDate = async (salesRepository: typeof Sales) => {
    const filterDate = await salesRepository.findOne({order: [['id', 'DESC']]}).catch((err) => {
        console.error(err);
        return null;
    })
    return filterDate instanceof Sales ? filterDate?.createdAt : dayjs().add(-1, 'day').format('YYYY-MM-DD');
}
