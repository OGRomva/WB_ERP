import axios from 'axios';
import axiosRetry from 'axios-retry'
import * as http2 from "http2";

export const getOrdersWB = async (apiKey: string, filterDate: string) => {
    try {
        const url: string = "https://statistics-api.wildberries.ru/api/v1/supplier/orders";
        console.log(filterDate)
        const params = {
            "dateFrom": `${filterDate}`
        }
        const headers = {
            "Authorization": `${apiKey}`
        }

        axiosRetry(axios, {
            retries: 5
        })

        let data = undefined;
        data = await axios.get(url, {
            params: params,
            headers: headers,
            httpAgent: http2
        })
            // .catch((err) => {
            //     if (tryCount !== 5) {
            //         tryCount++;
            //         console.log(err?.message, "tryCount:  ", tryCount);
            //
            //         setTimeout(async () => {
            //             return getOrdersWB(apiKey, filterDate, tryCount)
            //         }, 15000);
            //     } else {
            //         console.log(err?.message, "tryCount:  ", tryCount);
            //         //уведомление о провале загрузки
            //     }
        // });


        // let objects
        //
        // let response = await fetch(url + '?' + new URLSearchParams(params), {
        //     headers: headers,
        // }).then(async (data) => {
        //     if (data.ok) {
        //         objects = await data.json()
        //         objects = JSON.parse(objects)
        //     }
        //
        // }).catch((e) => {
        //     console.log(e)
        // })
        //
        // return objects;

        return data?.data
    } catch (e) {
        console.error(e);
    }

}
