import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Header></Header>
            <div className="md:w-1/2 w-3/4 mx-auto h border-4 border-orange-600 rounded-lg mt-16">
                <h1 className="text-2xl mt-5 mb-2 p-5 text-center">
                    Please Register with Credentials ...
                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* for display name */}
                    <label className="text-xl ml-[11%]" htmlFor="email">
                        Full Name
                    </label>
                    <br />
                    <input
                        className="block border-2 border-orange-600 w-4/5 h-10 rounded-md mx-auto mb-2"
                        {...register("fullName", {
                            required: "this is required",
                            maxLength: {
                                value: 50,
                                message:
                                    "Full name should be less than 50 chars long",
                            },
                        })}
                    />
                    {errors.fullName && (
                        <p className="text-red-600 text-center warning mb-2">
                            {errors.fullName.message}
                        </p>
                    )}

                    {/* for email */}
                    <label className="text-xl ml-[11%]" htmlFor="email">
                        Email
                    </label>
                    <br />
                    <input
                        className="block border-2 border-orange-600 w-4/5 h-10 rounded-md mx-auto mb-2"
                        {...register("email", {
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/i,
                                message: "Invalid email address",
                            },
                            required: "this is required",
                            maxLength: 30,
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-600 text-center warning mb-2">
                            {errors.email.message}
                        </p>
                    )}

                    {/* for password  */}
                    <label className="text-xl ml-[11%]" htmlFor="password">
                        Password
                    </label>
                    <br />
                    <input
                        className="block border-2 border-orange-600 w-4/5 h-10 rounded-md mx-auto mb-2"
                        {...register("password", {
                            pattern: {
                                value: /[0-9a-zA-Z@#$%&!]{6,}/i,
                                message:
                                    "Password must be at least 6 chars long",
                            },
                            required: "This is required",
                        })}
                    />
                    {errors.password && (
                        <p className="text-red-600 text-center warning mb-2 warning">
                            {errors.password.message}
                        </p>
                    )}

                    <input
                        className="block border-2 text-white font-bold hover:font-extrabold bg-orange-600 hover:bg-orange-700 w-4/5 h-10 rounded-md mx-auto mt-3 mb-3"
                        value="Submit"
                        type="submit"
                    />
                    <br />
                </form>

                <p className="text-xl text-center">
                    Already have an account?{" "}
                    <span className="font-bold text-orange-600">
                        <Link to="/login">Login</Link>
                    </span>
                </p>
            </div>
        </>
    );
};

export default Register;