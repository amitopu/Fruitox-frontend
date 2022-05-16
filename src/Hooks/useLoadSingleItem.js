import { useEffect, useState } from "react";
import axios from "axios";

const useLoadSingleItem = (index) => {
    const [item, setItem] = useState({});
    const [id, setId] = useState(null);

    useEffect(() => {
        setId(index);
        if (id) {
            axios
                .get(`http://localhost:5000/items/${id}`)
                .then((res) => setItem(res.data));
        }
    }, [id, index]);

    return item;
};

export default useLoadSingleItem;
