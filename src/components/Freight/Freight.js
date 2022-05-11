import React from "react";
import "./Freight.css";

const Freight = () => {
    return (
        <div className="relative w-full grid grid-cols-2 h-[300px] lg:mb-16 md:mb-12 mb-8 px-4 lg:px-16 md:px-8 rounded-2xl">
            <div className="h-[300px] w-auto bg-orange-600 rounded-l-2xl">
                <p className="lg:text-4xl md:text-3xl text-xl text-white font-semibold  h-[300px] w-3/4 mx-auto lg:pt-12 md:py-8 py-4">
                    We probvide the largest logistic suppport in the country
                    with more than{" "}
                    <span className="font-extrabold">"500" </span>
                    frigo truck.
                </p>
            </div>
            <div className="w-auto flex">
                <div className="freight-left w-0"></div>
                <img
                    className="freight-img w-full h-[300px] rounded-r-2xl"
                    src="images/freight.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Freight;
