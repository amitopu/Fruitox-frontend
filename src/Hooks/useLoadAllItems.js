import axios from "axios";
import { useEffect, useState } from "react";
const useLoadItems = (url) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setItems(res.data);
            })
            .catch((err) => setError(err.message));
    }, [url]);

    return [items, error];
};

export default useLoadItems;
