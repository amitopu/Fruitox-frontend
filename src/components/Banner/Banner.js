import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        document.getElementById("banner-img").onload = (event) => {
            setLoaded(true);
        };
    }, []);

    return (
        <div>
            <div className="text-center mx-auto p-4 lg:px-16 md:px-8">
                <div className="bg-gray-900 rounded-2xl relative h-auto">
                    <img
                        id="banner-img"
                        className=" mx-auto w-full rounded-2xl opacity-70"
                        src="images/fruitox-banner.jpg
                        "
                        alt="Banner contains fresh fruits"
                    />
                    <h1
                        className={`${
                            loaded ? "description" : ""
                        } absolute lg:top-[70%] md:top-[60%] top-[50%] md:left-[12%] left-[10%] w-4/5  md:text-5xl text-3xl text-white drop-shadow-md font-bold font-cabin`}
                    >
                        Largest Fruit Warehouse In The City
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
