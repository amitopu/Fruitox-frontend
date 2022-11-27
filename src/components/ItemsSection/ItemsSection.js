import React from "react";
import { useNavigate } from "react-router-dom";
import useLoadItems from "../../Hooks/useLoadAllItems";
import HomeItem from "../HomeItem/HomeItem";

const ItemsSection = () => {
    const navigate = useNavigate();
    const url = `https://fruitox.onrender.com/items?page=${0}&size=${6}`;
    const [items, error] = useLoadItems(url);

    return (
        <div className="my-10">
            <h1 className="text-center text-3xl font semibold my-5">
                Inventories
            </h1>
            <div className="text-center p-4 lg:px-16 md:px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-4">
                {items.map((item) => (
                    <HomeItem key={item._id} item={item}></HomeItem>
                ))}
            </div>
            <p className="my-3 text-center text-red-600 font-bold">{error}</p>
            <button
                onClick={() => navigate("/manageinventories")}
                className="block w-52 h-[35px] text-white text-lg bg-orange-600 hover:bg-orange-700 mx-auto my-2 rounded-md hover:font-bold"
            >
                Manage Inventories {">>"}
            </button>
        </div>
    );
};

export default ItemsSection;
