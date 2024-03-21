import axios from 'Axios';
import * as process from "process";
import dayjs, {Dayjs} from "dayjs";

export const getOrdersWB = async () => {
    try {
        let tryCount: number = 0;
        const filterDate = "2024-03-19"
        console.log(filterDate)
        const url: string = "https://statistics-api.wildberries.ru/api/v1/supplier/orders";
        const params = {
            "dateFrom": `${filterDate}`
        }
        const headers = {
            "Authorization": `${process.env.KEY}`
        }
        console.log(process.env.KEY)
        let data = undefined;
        let flag = true


        while (flag) {
            try {
                data = await axios.get(url, {params, headers})
                if (data?.status === 200) flag = false;
            } catch (err) {
                tryCount++;
                if (tryCount === 5) flag = false;
                console.log(err?.message, "tryCount:  ", tryCount)
            }
        }

        return data?.data;
    } catch (e) {
        console.error(e);
    }

}
