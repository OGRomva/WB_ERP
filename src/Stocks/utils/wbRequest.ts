import axios from 'Axios';
import * as process from "process";

export const getStocksWB = async (tryCount: number = 0) => {
    try {
        const url: string = "https://statistics-api.wildberries.ru/api/v1/supplier/stocks";
        const params = {
            "dateFrom": "2000-01-01T00:00:00"
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
                        getStocksWB(tryCount)
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
