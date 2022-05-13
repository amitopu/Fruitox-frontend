import React from "react";
import { Grid } from "react-loader-spinner";
import Header from "../Header/Header";

const Spinner = () => {
    return (
        <>
            <Header></Header>
            <div className="mt-20 mx-auto w-40 h-auto">
                <Grid color="rgb(249 115 22)" height={80} width={80} />
            </div>
        </>
    );
};

export default Spinner;
