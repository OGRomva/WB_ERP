import axios from 'axios';
import axiosRetry from "axios-retry";

export const getFinancialReportWB = async (dateFrom: string, dateTo: string, apiKey: string, rrdid: number = 0) => {
    try {
        const url: string = "https://statistics-api.wildberries.ru/api/v3/supplier/reportDetailByPeriod";
        const params = {
            "dateFrom": `${dateFrom}`,
            "dateTo": `${dateTo}`,
            "rrdid": rrdid
        }
        const headers = {
            "Authorization": `${apiKey}`
        }

        axiosRetry(axios, {
            retries: 5
        })

        let data = undefined;
        data = await axios.get(url, {params: params, headers: headers, timeout: 30000})
        //     .catch((err) => {
        //         if (tryCount !== 5) {
        //             tryCount++;
        //             console.log(err?.message, "tryCount:  ", tryCount);
        //
        //             setTimeout(() => {
        //                 getFinancialReportWB(dateFrom, dateTo, apiKey, rrdid, tryCount)
        //             }, 15000);
        //         } else {
        //             console.log(err?.message, "tryCount:  ", tryCount);
        //         }
        // });

        return data?.data;
    } catch (e) {
        console.error(e);
    }
}
