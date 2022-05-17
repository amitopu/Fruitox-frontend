import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAddSingleItem = (item) => {
    const [result, setResult] = useState({});
    const [user] = useAuthState(auth);
    const manager = user.displayName;
    const sold = 0;

    useEffect(() => {
        if (user && Object.keys(item).length !== 0) {
            const newItem = { ...item, manager, sold };
            fetch("http://localhost:5000/additem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            })
                .then((res) => {
                    if (res.status >= 200 && res.status <= 299) {
                        return res.json();
                    } else {
                        throw Error(res.statusText);
                    }
                })
                .then((res) => setResult(res))
                .catch((error) => {
                    setResult(null);
                });
        }
    }, [item, user, manager]);

    return result;
};

export default useAddSingleItem;
