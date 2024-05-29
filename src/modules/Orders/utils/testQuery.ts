import axios from "axios";

export const getQuery = async () => {
    let data = '';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://httpbin.org/get',
        // headers: {
        //     'Authorization': 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjMxMDI1djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTcxNzAxMzMyOCwiaWQiOiJiZDgyYTA1NS1kNzM4LTQ3MzgtYjFhNi04MGIyMzM0N2U1YzgiLCJpaWQiOjE4MDU3NDc2LCJvaWQiOjUwMzQyLCJzIjoxMDczNzQxODYwLCJzaWQiOiI2YTcxYjEyNC1kYzQ5LTU4OWEtYTg5OC01MzZiYmRjMjhlNjIiLCJ1aWQiOjE4MDU3NDc2fQ.phVyC7TycDEx4FSxIWthoJHTq6fVYVSZYTHhtD0lGwVm6rwQe98QnuWzRq6JDz-yGCWbQD9d1Av4yCjo8h5tTQ'
        // },
        data : data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}