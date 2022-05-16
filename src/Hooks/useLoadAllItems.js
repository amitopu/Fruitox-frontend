import axios from "axios";
import { useEffect, useState } from "react";
const useLoadItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/items").then((res) => {
            setItems(res.data);
        });
    }, []);

    return [items];
};

export default useLoadItems;
