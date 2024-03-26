import axios from 'Axios';
import * as process from "process";
import * as dayjs from "dayjs";

export const getFinancialReportWB = async (filterDate: string = dayjs().format("YYYY-MM-DD"), tryCount: number = 0) => {
    try {
        //тут старая ссылка, новая с v3
        const url: string = "https://statistics-api.wildberries.ru/api/v1/supplier/reportDetailByPeriod";
        const params = {
            "dateFrom": `${dayjs().add(-7, 'day').format("YYYY-MM-DD")}`,
            "dateTo": `${filterDate}`,
            "rrdid": 0
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
                        getFinancialReportWB(filterDate, tryCount)
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
