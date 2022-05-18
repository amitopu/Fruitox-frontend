import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLoadSingleItem from "../../Hooks/useLoadSingleItem";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Title from "../Title/Title";

const Inventory = () => {
    const { id } = useParams();
    const [item, error] = useLoadSingleItem(id);
    const [stockFormError, setStockFormError] = useState(false);
    const [addToStockError, setAddToStockError] = useState(false);
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
        manager,
    } = item;

    // handler for add item
    const handleAddItems = () => {
        navigate("/additems");
    };

    const handleManageInventory = () => {
        navigate("/manageinventories");
    };

    const handleDelivered = (id) => {
        // reduce qunatity by one
        const newSold = parseInt(sold) + 1;
        const newQuantity = parseInt(quantity) - 1;
        const data = {
            sold: newSold,
            quantity: newQuantity,
        };
        const url = `https://quiet-shore-21576.herokuapp.com/delivered/${_id}`;
        if (newQuantity >= 0) {
            axios.put(url, data).then((res) => {
                if (res.data.acknowledged && res.data.upsertedId) {
                    setDeliveryError(false);
                    navigate(0);
                } else if (res.data.acknowledged) {
                    setDeliveryError(false);
                    navigate(0);
                } else {
                    setDeliveryError(true);
                }
            });
        }
    };

    // handler for adding to stock
    const handleAddToStock = (event) => {
        event.preventDefault();
        const newStock = parseInt(event.target.restock.value);
        const url = `https://quiet-shore-21576.herokuapp.com/delivered/${_id}`;
        if (newStock <= 0) {
            setStockFormError(true);
        } else {
            setStockFormError(false);
            const updatedStock = parseInt(quantity) + newStock;
            axios.put(url, { quantity: updatedStock }).then((res) => {
                if (res.data.acknowledged && res.data.upsertedId) {
                    console.log(res.data.upsertedId, "first");
                    setAddToStockError(false);
                    // navigate(`/inventory/${res.data.upsertedId}`);
                    navigate(0);
                } else if (res.data.acknowledged) {
                    console.log(res.data.acknowledged, "second");
                    setAddToStockError(false);
                    // navigate(`/inventory/${_id}`);
                    navigate(0);
                } else {
                    console.log("third");
                    setAddToStockError(true);
                }
            });
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
                        Manage Inventories
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

                    {/* for add items to stock */}
                    <form onSubmit={handleAddToStock}>
                        <input
                            type="number"
                            name="restock"
                            className="border-2 border-orange-600 w-full h-10 rounded-md mx-auto mb-2 pl-3"
                            placeholder="Enter quantity to add"
                        />
                        <input
                            type="submit"
                            name="submit"
                            value="Add to stock"
                            className="w-full h-[40px] text-2xl bg-orange-600 text-white hover:bg-orange-700 hover:font-bold rounded-md mb-3"
                        />
                        <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                            {stockFormError ? "Enter positive number" : ""}
                        </p>
                        <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                            {addToStockError ? "Enter positive number" : ""}
                        </p>
                    </form>
                </div>

                {/* infor section  */}
                <div className="lg:col-span-3 md:col-span-2 col-span-1 px-5 border-2 border-orange-600 rounded-md py-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {/* image  */}
                    <div className="w-auto mx-auto my-3">
                        <img
                            className="h-[200px] w-[200px] rounded-md border-2 border-orange-600"
                            src={imageurl}
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
                                Current Stock:{" "}
                                <span className="font-semibold">
                                    {quantity} {unit}
                                </span>
                            </p>
                            <p className="text-xl ml-5 my-2">
                                Sold:{" "}
                                <span className="font-semibold">
                                    {sold} {unit}
                                </span>
                            </p>
                            <p className="text-xl ml-5 my-2">
                                Manager:{" "}
                                <span className="font-semibold">{manager}</span>
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
                    {deliveryError
                        ? "Product not delivered!! Please try again later"
                        : ""}
                </p>
                <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                    {error}
                </p>
            </div>
            <Title></Title>
            <Footer></Footer>
        </>
    );
};

export default Inventory;
