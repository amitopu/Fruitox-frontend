import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header></Header>
            <div className="mt-20 text-center mb-20">
                <img
                    className="mx-auto"
                    src="images/404-page.png
                "
                    alt=""
                />

                <button
                    onClick={() => navigate("/home")}
                    className="font-Macondo text-4xl text-center font-bold text-lime-500 my-5"
                >
                    Don't Cry!!! Please go back to sweet home.
                </button>
            </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;
