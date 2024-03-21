import axios from 'Axios';
import * as process from "process";

export const getStocksWB = async () => {
    let tryCount: number = 0
    const url: string = "https://statistics-api.wildberries.ru/api/v1/supplier/stocks";
    const params = {
        "dateFrom": "2000-01-01T00:00:00"
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
}
