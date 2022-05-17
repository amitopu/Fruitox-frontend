import React from "react";
import { useNavigate } from "react-router-dom";

const HomeItem = ({ item }) => {
    const navigate = useNavigate();
    const {
        _id,
        itemName,
        price,
        unit,
        imageurl,
        supplierName,
        description,
        quantity,
    } = item;
    return (
        <div className="border-2 border-orange-600 rounded-xl p-3">
            <div className="border-2 w-fit h-auto border-orange-600 rounded-md my-3 mx-auto">
                <img
                    className="h-[100px] w-[100px] rounded-md"
                    src={imageurl}
                    alt=""
                />
            </div>
            <p className="text-center my-2 text-base">
                Item Name: <span className="font-semibold">{itemName}</span>
            </p>
            <p>
                price:{" "}
                <span className="font-semibold">
                    {price}$/{unit}
                </span>
            </p>
            <p>
                Supplier Name:{" "}
                <span className="font-semibold">{supplierName}</span>
            </p>
            <p>
                Quantity:{" "}
                <span className="font-semibold">
                    {quantity} {unit}
                </span>
            </p>
            <p>
                About:{" "}
                <span className="font-semibold">
                    {description.slice(0, 81)}...
                </span>
            </p>
            <button
                onClick={() => navigate(`/inventory/${_id}`)}
                className="block w-40 h-[35px] text-white text-lg bg-orange-600 hover:bg-orange-700 hover:font-bold mx-auto my-2 rounded-md"
            >
                Manage Item
            </button>
        </div>
    );
};

export default HomeItem;
