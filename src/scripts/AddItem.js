import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const AddSingleItem = (item) => {
    const [result, setResult] = useState({});
    const [user] = useAuthState(auth);
    const supplierName = user.displayName;
    const sold = 0;

    useEffect(() => {
        if (user) {
            const data = { ...item, supplierName, sold };
            fetch("http://localhost:5000/additem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((info) => {
                    if (info.acknowledged) {
                        setResult(info);
                    }
                });
        }
    }, [item, supplierName, user]);

    return result;
};

export default AddSingleItem;
