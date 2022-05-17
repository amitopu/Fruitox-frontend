import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UpdateForm = ({ item }) => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { _id } = item;
    const {
        itemName,
        price,
        supplierName,
        sold,
        unit,
        quantity,
        imageurl,
        description,
    } = item;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            itemName,
            price,
            supplierName,
            sold,
            unit,
            quantity,
            imageurl,
            description,
        },
    });
    // for handling form submit
    const onSubmit = (data) => {
        console.log(data);
        setError("");
        axios
            .put(`http://localhost:5000/item/${_id}`, data)
            .then((res) => {
                if (res.data.acknowledged && res.data.upsertedId) {
                    setError("");
                    navigate(`/inventory/${res.data.upsertedId}`);
                } else if (res.data.acknowledged) {
                    setError("");
                    navigate(`/inventory/${_id}`);
                } else {
                    setError("Error!!! Item is not updated");
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div className="md:w-1/2 w-3/4 mx-auto h border-4 border-orange-600 rounded-lg mt-16 mb-10">
            <h1 className="text-2xl mt-5 mb-2 p-5 text-center">
                Please Enter Item Details...
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="text-xl ml-[11%]" htmlFor="email">
                    Item Name
                </label>
                <br />
                {/* input for Item Name  */}
                <input
                    className="block border-2 border-orange-600 w-4/5 h-10 rounded-md mx-auto mb-2 pl-3"
                    {...register("itemName", {
                        required: "this is required",
                        maxLength: {
                            value: 30,
                            message: "Should be less than 30 chars.",
                        },
                        minLength: {
                            value: 2,
                            message: "Must be at least 2 chars. long",
                        },
                    })}
                    // placeholder={itemName}
                />
                {errors.itemName && (
                    <p className="text-red-600 text-center warning mb-2">
                        {errors.itemName.message}
                    </p>
                )}

                {/* input for supplier Name  */}
                <label className="text-xl ml-[11%]" htmlFor="email">
                    Supplier Name
                </label>
                <br />

                <input
                    className="block border-2 border-orange-600 w-4/5 h-10 rounded-md mx-auto mb-2 pl-3"
                    {...register("supplierName", {
                        required: "this is required",
                        maxLength: {
                            value: 50,
                            message: "Should be less than 50 chars.",
                        },
                        minLength: {
                            value: 4,
                            message: "Must be at least 4 chars. long",
                        },
                    })}
                    // placeholder={`${supplierName}`}
                />
                {errors.supplierName && (
                    <p className="text-red-600 text-center warning mb-2">
                        {errors.supplierName.message}
                    </p>
                )}

                {/* for description  */}
                <label className="text-xl ml-[11%]" htmlFor="email">
                    Description
                </label>
                <br />
                <textarea
                    className="block border-2 border-orange-600 w-4/5 h-20 rounded-md mx-auto mb-2 pl-3"
                    {...register("description", {
                        required: "this is required",
                        maxLength: {
                            value: 500,
                            message: "Should be less than 500 chars.",
                        },
                        minLength: {
                            value: 30,
                            message: "Must be at least 30 chars. long",
                        },
                    })}
                    // placeholder={description}
                />
                {errors.description && (
                    <p className="text-red-600 text-center warning mb-2">
                        {errors.description.message}
                    </p>
                )}
                {/* for imgae url  */}
                <label className="text-xl ml-[11%]" htmlFor="email">
                    Image Url
                </label>
                <br />

                <input
                    className="block border-2 border-orange-600 w-4/5 h-10 rounded-md mx-auto mb-2 pl-3"
                    {...register("imageurl", {
                        minLength: {
                            value: 2,
                            message: "Must be at least 2 chars. long",
                        },
                    })}
                    // placeholder={imageurl}
                />
                {errors.imageurl && (
                    <p className="text-red-600 text-center warning mb-2">
                        {errors.imageurl.message}
                    </p>
                )}

                {/* input for price  */}
                <label className="text-xl ml-[11%]" htmlFor="email">
                    Price/Unit
                </label>
                <br />

                <input
                    className="block border-2 border-orange-600 w-4/5 h-10 rounded-md mx-auto mb-2 pl-3"
                    {...register("price", {
                        required: "this is required",
                        pattern: {
                            value: /^(?!0\d)\d*(\.\d+)?$/,
                            message:
                                "price should be positive integer or decimal number",
                        },
                    })}
                    // placeholder={price}
                />
                {errors.price && (
                    <p className="text-red-600 text-center warning mb-2">
                        {errors.price.message}
                    </p>
                )}

                {/* for quantity */}
                <div className="grid grid-cols-2 gap-2 w-4/5 mx-auto">
                    <div>
                        <label className="text-xl ml-[11%]" htmlFor="email">
                            Quantity
                        </label>
                        <br />

                        <input
                            type="number"
                            className="border-2 border-orange-600 w-full h-10 rounded-md mx-auto mb-2 pl-3"
                            {...register("quantity", {
                                required: "this is required",
                                pattern: {
                                    value: /^[1-9]\d*/,
                                    message: "Quantity should not be negative",
                                },
                            })}
                            // placeholder={parseInt(quantity)}
                        />
                        {errors.quantity && (
                            <p className="text-red-600 text-center warning mb-2">
                                {errors.quantity.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="text-xl ml-[11%]" htmlFor="email">
                            Unit
                        </label>
                        <br />

                        <select
                            className="border-2 border-orange-600 w-full h-10 rounded-md mx-auto mb-2 pl-3"
                            {...register("unit", {
                                // required: "this is required",
                            })}
                        >
                            <option value="unit">units</option>
                            <option value="tonne">tonnes</option>
                            <option value="kg">kilograms</option>
                            <option value="box">box</option>
                        </select>
                    </div>
                    {/* {errors.itemName && (
                            <p className="text-red-600 text-center warning mb-2">
                                {errors.itemName.message}
                            </p>
                        )} */}
                </div>

                {/* input for sold */}
                <label className="text-xl ml-[11%]" htmlFor="email">
                    Sold
                </label>
                <br />

                <input
                    type="number"
                    className="block border-2 border-orange-600 w-4/5 h-10 rounded-md mx-auto mb-2 pl-3"
                    {...register("sold", {
                        required: "this is required",
                        pattern: {
                            value: /^[01-9]\d*/,
                            message:
                                "sold should not be negative and should not be greater than qauntity",
                        },
                    })}
                    // placeholder={sold}
                />
                {errors.sold && (
                    <p className="text-red-600 text-center warning mb-2">
                        {errors.sold.message}
                    </p>
                )}

                {/* input for submit */}
                <input
                    className="block border-2 text-white font-bold hover:font-extrabold bg-orange-600 hover:bg-orange-700 w-4/5 h-10 rounded-md mx-auto mt-3 mb-3"
                    value="Update Items"
                    type="submit"
                />
                <br />
            </form>
            <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                {error}
            </p>
        </div>
    );
};
