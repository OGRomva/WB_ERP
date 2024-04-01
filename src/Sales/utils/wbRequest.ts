import axios from 'Axios';
import * as process from "process";
import * as dayjs from "dayjs";

export const getSalesWB = async (filterDate: string = dayjs().format("YYYY-MM-DD"), tryCount: number = 0) => {
    try {
        const url: string = "https://statistics-api.wildberries.ru/api/v1/supplier/sales";
        const params = {
            "dateFrom": `${filterDate}`
        }
        const headers = {
            "Authorization": `${process.env.KEY}`
        }

        let data = undefined;
        data = await axios.get(url, {params, headers})
            .catch((err) => {
                if (tryCount !== 5) {
                    tryCount++;
                    console.log(err?.message, "tryCount:  ", tryCount);

                    setTimeout(() => {
                        getSalesWB(filterDate, tryCount)
                    }, 15000);
                } else {
                    console.log(err?.message, "tryCount:  ", tryCount);
                }
        });

        return data?.data;
    } catch (e) {
        console.error(e);
    }

}
