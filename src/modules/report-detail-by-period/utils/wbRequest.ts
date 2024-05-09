import axios from 'Axios';

export const getFinancialReportWB = async (dateFrom: string, dateTo: string, apiKey: string, rrdid: number = 0, tryCount: number = 0) => {
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

        let data = undefined;
        data = await axios.get(url, {params, headers})
            .catch((err) => {
                if (tryCount !== 5) {
                    tryCount++;
                    console.log(err?.message, "tryCount:  ", tryCount);

                    setTimeout(() => {
                        getFinancialReportWB(dateFrom, dateTo, apiKey, rrdid, tryCount)
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
