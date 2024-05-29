import axios from 'axios';
import axiosRetry from "axios-retry";

export const getSalesWB = async (supplierKey: string, filterDate: string) => {
    try {
        const url: string = "https://statistics-api.wildberries.ru/api/v1/supplier/sales";
        const params = {
            "dateFrom": `${filterDate}`
        }
        const headers = {
            "Authorization": `${supplierKey}`
        }

        axiosRetry(axios, {
            retries: 5
        })

        console.log(filterDate)

        let data = undefined;
        data = await axios.get(url, {params: params, headers: headers, timeout: 30000})
        //     .catch((err) => {
        //         if (tryCount !== 5) {
        //             tryCount++;
        //             console.log(err?.message, "tryCount:  ", tryCount);
        //
        //             setTimeout(() => {
        //                 getSalesWB(supplierKey, filterDate, tryCount)
        //             }, 15000);
        //         } else {
        //             console.log(err?.message, "tryCount:  ", tryCount);
        //             //уведомление о провале загрузки
        //         }
        // });

        return data?.data;
    } catch (e) {
        console.error(e);
    }
}
