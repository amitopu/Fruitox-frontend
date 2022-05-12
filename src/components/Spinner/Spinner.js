import React from "react";
import { Grid } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className="mt-20 mx-auto w-40 h-auto">
            <Grid color="#00BFFF" height={80} width={80} />
        </div>
    );
};

export default Spinner;
