import { useEffect, useState } from "react";
import axios from "axios";

const useLoadSingleItem = (index) => {
    const [item, setItem] = useState({});
    const [error, setError] = useState("");
    const [id, setId] = useState(null);

    useEffect(() => {
        setId(index);
        if (id) {
            axios
                .get(`https://fruitox.onrender.com/items/${id}`)
                .then((res) => setItem(res.data))
                .catch((err) => setError(err.message));
        }
    }, [id, index]);

    return [item, error];
};

export default useLoadSingleItem;
