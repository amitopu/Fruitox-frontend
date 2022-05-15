import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAddSingleItem = (item) => {
    const [result, setResult] = useState({});
    const [user] = useAuthState(auth);
    const supplierName = user.displayName;
    const sold = 0;

    useEffect(() => {
        if (user && Object.keys(item).length !== 0) {
            const newItem = { ...item, supplierName, sold };
            fetch("http://localhost:5000/additem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            })
                .then((res) => res.json())
                .then((info) => {
                    if (info) {
                        setResult(info);
                    }
                });
        }
    }, [item, user, supplierName]);

    return result;
};

export default useAddSingleItem;
