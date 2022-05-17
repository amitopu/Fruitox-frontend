import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Title = () => {
    const location = useLocation();
    const { pathname } = location;
    const makeTitle = () => {
        if (pathname === "/") {
            return "Home -";
        } else if (pathname !== "/") {
            return pathname.slice(1) + ` -`;
        } else {
            return "";
        }
    };
    useEffect(() => {
        const title = makeTitle();
        document.title = `${title} Fruitox | Largest fruit warehouse in the city`;
    }, [location]);
    return <div></div>;
};

export default Title;
