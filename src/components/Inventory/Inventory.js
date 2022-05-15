import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useLoadSingleItem from "../../Hooks/useLoadSingleItem";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Inventory = () => {
    const { id } = useParams();
    const [item] = useLoadSingleItem(id);
    const [error, setError] = useState();
    const [deliveryError, setDeliveryError] = useState(false);
    const navigate = useNavigate();
    const {
        _id,
        itemName,
        price,
        supplierName,
        sold,
        unit,
        quantity,
        imageurl,
        description,
    } = item;
    // handler for add item
    const handleAddItems = () => {
        navigate("/additems");
    };

    const handleManageInventory = () => {
        navigate("/manageinventory");
    };

    const handleDelivered = (_id) => {
        // reduce qunatity by one
        const newSold = parseInt(sold) + 1;
        const newQuantity = parseInt(quantity) - 1;
        const data = {
            sold: newSold,
            quantity: newQuantity,
        };
        if (newQuantity >= 0) {
            axios
                .put(`http://localhost:5000/delivered/${id}`, data)
                .then((res) => {
                    if (res.data.acknowledged && res.data.upsertedId) {
                        setError(false);
                        navigate(`/inventory/${res.data.upsertedId}`);
                    } else if (res.data.acknowledged) {
                        setError(false);
                        navigate(`/inventory/${id}`);
                    } else {
                        setError(true);
                    }
                });
        } else {
            setDeliveryError(true);
        }
    };

    const handlUpdateItem = (_id) => {
        navigate(`/updateitems/${_id}`);
    };
    return (
        <>
            <Header></Header>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 lg:mt-16 md:mt-8 mt-4 px-3 mb-10">
                {/* buttons and field */}
                <div className="px-5 border-2 border-orange-600 rounded-md py-3">
                    <button
                        onClick={handleAddItems}
                        className="w-full h-[40px] text-2xl bg-orange-600 text-white hover:bg-orange-700 hover:font-bold rounded-md mb-3"
                    >
                        Add Items
                    </button>
                    <br />
                    <button
                        onClick={handleManageInventory}
                        className="w-full h-[40px] text-2xl bg-orange-600 text-white hover:bg-orange-700 hover:font-bold rounded-md mb-3"
                    >
                        Manage Inventory
                    </button>
                    <br />
                    <button
                        onClick={() => handleDelivered(_id)}
                        className="w-full h-[40px] text-2xl bg-orange-600 text-white hover:bg-orange-700 hover:font-bold rounded-md mb-3"
                    >
                        Delivered
                    </button>
                    <br />
                    <button
                        onClick={() => handlUpdateItem(_id)}
                        className="w-full h-[40px] text-2xl bg-orange-600 text-white hover:bg-orange-700 hover:font-bold rounded-md mb-3"
                    >
                        Update Item
                    </button>
                </div>

                {/* infor section  */}
                <div className="lg:col-span-3 md:col-span-2 col-span-1 px-5 border-2 border-orange-600 rounded-md py-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {/* image  */}
                    <div className="w-auto mx-auto my-3">
                        <img
                            className="h-[200px] w-[200px] rounded-md border-2 border-orange-600"
                            src={`/${imageurl}`}
                            alt=""
                        />
                        <p className="text-xl my-2">Item Id: {_id}</p>
                    </div>

                    {/* other info  */}
                    <div className="lg:col-span-2 md:col-span-1 my-3">
                        <div className="flex flex-wrap justify-left my-3 mx-3">
                            <p className="text-xl ml-5 my-2">
                                Item Name:{" "}
                                <span className="font-semibold">
                                    {itemName}
                                </span>
                            </p>
                            <p className="text-xl ml-5 my-2">
                                Item Price:{" "}
                                <span className="font-semibold">
                                    {price}$ / {unit}
                                </span>
                            </p>
                            <p className="text-xl ml-5 my-2">
                                Supplier:{" "}
                                <span className="font-semibold">
                                    {supplierName}
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-left my-3 mx-3">
                            <p className="text-xl ml-5 my-2">
                                Initial Stock:{" "}
                                <span className="font-semibold">
                                    {quantity}
                                </span>
                            </p>
                            <p className="text-xl ml-5 my-2">Sold: {sold}</p>
                            <p className="text-xl ml-5 my-2">
                                Remaining Stock:{" "}
                                <span className="font-semibold">
                                    {parseInt(quantity) - parseInt(sold)}
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-around my-3 mx-3">
                            <p className="text-xl ml-5 my-2">
                                Item Details:{" "}
                                <span className="font-semibold">
                                    {description}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                    {error
                        ? "Something went wrong!! Please try again later"
                        : ""}
                </p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Inventory;
