import React from "react";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";

const Additems = () => {
    // hook for form control
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    // for handling form submit
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <Header></Header>
            <div className="md:w-1/2 w-3/4 mx-auto h border-4 border-orange-600 rounded-lg mt-16">
                <h1 className="text-2xl mt-5 mb-2 p-5 text-center">
                    Please Enter Item Details...
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="text-xl ml-[11%]" htmlFor="email">
                        Item Name
                    </label>
                    <br />

                    {/* input for email  */}
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

                    {/* input for submit */}
                    <input
                        className="block border-2 text-white font-bold hover:font-extrabold bg-orange-600 hover:bg-orange-700 w-4/5 h-10 rounded-md mx-auto mt-3 mb-3"
                        value="Submit"
                        type="submit"
                    />
                    <br />
                </form>
            </div>
        </>
    );
};

export default Additems;
