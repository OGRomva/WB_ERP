import axios from 'axios';

export const getSalesWB = async (supplierKey: string, filterDate: string, tryCount: number = 0, ) => {
    try {
        const url: string = "https://statistics-api.wildberries.ru/api/v1/supplier/sales";
        const params = {
            "dateFrom": `${filterDate}`
        }
        const headers = {
            "Authorization": `${supplierKey}`
        }

        console.log(filterDate)

        let data = undefined;
        data = await axios.get(url, {params, headers})
            .catch((err) => {
                if (tryCount !== 5) {
                    tryCount++;
                    console.log(err?.message, "tryCount:  ", tryCount);

                    setTimeout(() => {
                        getSalesWB(supplierKey, filterDate, tryCount)
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
