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


        return data?.data
    } catch (e) {
        console.error(e);
    }

}
