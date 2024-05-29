import axios from 'axios';
import axiosRetry from "axios-retry";

export const getStocksWB = async (authorizationKey: string) => {
    try {
        const url: string = "https://statistics-api.wildberries.ru/api/v1/supplier/stocks";
        const params = {
            "dateFrom": "2000-01-01T00:00:00"
        }
        const headers = {
            "Authorization": `${authorizationKey}`
        }

        axiosRetry(axios, {
            retries: 5
        })

        let data = undefined;
        data = await axios.get(url, {params: params, headers: headers, timeout: 30000})
            // .catch((err) => {
            //     if (tryCount !== 5) {
            //         tryCount++;
            //         console.log(err?.message, "tryCount:  ", tryCount);
            //
            //         setTimeout(() => {
            //             getStocksWB(authorizationKey, tryCount)
            //         }, 15000);
            //     } else {
            //         console.log(err?.message, "tryCount:  ", tryCount);
            //         //уведомление о провале загрузки
            //     }
            // });

        return data?.data;
    } catch (e) {
        console.error(e);
    }
}
