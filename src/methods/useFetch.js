const { useEffect, useState } = require("react");

const useFetch = (url, method, body) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        fetch(url, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: body,
        })
            .then(response => {
                if (response.status !== 200) {
                    throw Error('Could not fetch data for that resource');
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setIsPending(false);
                setError(err.message);
            })
    }, [url, method, body]);

    return { data, isPending, error }
}

export default useFetch;