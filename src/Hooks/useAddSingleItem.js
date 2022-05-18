import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAddSingleItem = (item) => {
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [user] = useAuthState(auth);
    const [error, setError] = useState(false);
    const manager = user.displayName;
    const sold = 0;

    useEffect(() => {
        if (user && Object.keys(item).length !== 0) {
            setLoading(true);
            setError(false);
            const newItem = { ...item, manager, sold };
            fetch("https://quiet-shore-21576.herokuapp.com/additem", {
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
                .then((res) => {
                    setLoading(false);
                    return setResult(res);
                })
                .catch((error) => {
                    console.log("catch");
                    setLoading(false);
                    setError(true);
                    setResult(null);
                });
        }
    }, [item, user, manager]);

    return [result, loading, error];
};

export default useAddSingleItem;
