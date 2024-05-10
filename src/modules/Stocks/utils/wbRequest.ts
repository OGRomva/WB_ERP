import axios from 'axios';

export const getStocksWB = async (authorizationKey: string, tryCount: number = 0) => {
    try {
        const url: string = "https://statistics-api.wildberries.ru/api/v1/supplier/stocks";
        const params = {
            "dateFrom": "2000-01-01T00:00:00"
        }
        const headers = {
            "Authorization": `${authorizationKey}`
        }

        let data = undefined;
        data = await axios.get(url, {params, headers})
            .catch((err) => {
                if (tryCount !== 5) {
                    tryCount++;
                    console.log(err?.message, "tryCount:  ", tryCount);

                    setTimeout(() => {
                        getStocksWB(authorizationKey, tryCount)
                    }, 15000);
                } else {
                    console.log(err?.message, "tryCount:  ", tryCount);
                    //уведомление о провале загрузки
                }
            });

        return data?.data;
    } catch (e) {
        console.error(e);
    }
}
