import React from "react";

const Features = () => {
    return (
        <div className=" text-center p-4 lg:px-16 md:px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-8">
            <div className="w-auto my-5 mx-auto">
                <img
                    src="images/food-safety.png"
                    className="mx-auto mb-3"
                    alt=""
                />
                <p className="text-xl font-Cabin font-semibold">
                    We ensure best biosafety porcedures
                </p>
            </div>
            <div className="w-auto my-5 mx-auto">
                <img
                    src="images/management.png"
                    className="mx-auto mb-3"
                    alt=""
                />
                <p className="text-xl font-Cabin font-semibold">
                    We have the best management team in the state
                </p>
            </div>
            <div className="w-auto my-5 mx-auto">
                <img
                    src="images/temp-control.png"
                    className="mx-auto mb-3"
                    alt=""
                />
                <p className="text-xl font-Cabin font-semibold">
                    We maintain consistent temperature to keep fruits fresh.
                </p>
            </div>
        </div>
    );
};

export default Features;
