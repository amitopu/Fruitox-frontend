import React from "react";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Additems = () => {
    // hook for form control
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    // for handling form submit
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <Header></Header>
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
                    />
                    {errors.itemName && (
                        <p className="text-red-600 text-center warning mb-2">
                            {errors.itemName.message}
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
                                        message:
                                            "Quantity should not be negative",
                                    },
                                })}
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

                    {/* input for submit */}
                    <input
                        className="block border-2 text-white font-bold hover:font-extrabold bg-orange-600 hover:bg-orange-700 w-4/5 h-10 rounded-md mx-auto mt-3 mb-3"
                        value="Add Items"
                        type="submit"
                    />
                    <br />
                </form>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Additems;
