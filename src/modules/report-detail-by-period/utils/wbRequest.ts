import axios from 'Axios';
import * as process from "process";

export const getFinancialReportWB = async (dateFrom: string, dateTo: string, apiKey: string, tryCount: number = 0) => {
    try {
        const url: string = "https://statistics-api.wildberries.ru/api/v3/supplier/reportDetailByPeriod";
        const params = {
            "dateFrom": `${dateFrom}`,
            "dateTo": `${dateTo}`,
            "rrdid": 0
        }
        const headers = {
            "Authorization": `${apiKey}`
        }

        let data = undefined;
        data = await axios.get(url, {params, headers})
            .catch((err) => {
                if (tryCount !== 5) {
                    tryCount++;
                    console.log(err?.message, "tryCount:  ", tryCount);

                    setTimeout(() => {
                        getFinancialReportWB(dateFrom, dateTo, apiKey, tryCount)
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
