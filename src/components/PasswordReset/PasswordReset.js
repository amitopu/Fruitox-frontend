import React from "react";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordReset = () => {
    // hook call for form control
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    // hook call for password reset with firebase
    const [sendPasswordResetEmail, , error] = useSendPasswordResetEmail(auth);

    //form handling submit button
    const onSubmit = (data) => {
        const { email } = data;
        console.log(email);
        sendPasswordResetEmail(email);
        toast("Sending password reset link to your email");
    };

    return (
        <>
            <Header></Header>
            <ToastContainer></ToastContainer>
            <div className="md:w-1/2 w-3/4 mx-auto h border-4 border-orange-600 rounded-lg mt-16">
                <h1 className="text-2xl mt-5 mb-2 p-5 text-center">
                    Please Enter Email To Reset Password...
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="text-xl ml-[11%]" htmlFor="email">
                        Email
                    </label>
                    <br />
                    <input
                        className="block border-2 border-orange-600 w-4/5 h-10 rounded-md mx-auto mb-2 pl-3"
                        {...register("email", {
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/i,
                                message: "Invalid email address",
                            },
                            required: "this is required",
                            maxLength: 30,
                        })}
                        placeholder="Enter your email"
                        // onBlur={captureEmail}
                    />
                    {errors.email && (
                        <p className="text-red-600 text-center warning mb-2">
                            {errors.email.message}
                        </p>
                    )}

                    {/* input for submit form data  */}
                    <input
                        className="block border-2 text-white font-bold hover:font-extrabold bg-orange-600 hover:bg-orange-700 w-4/5 h-10 rounded-md mx-auto mt-3 mb-3"
                        value="Reset Password"
                        type="submit"
                    />
                    <br />
                    {/* for showing errors  */}
                    <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                        {error?.message}
                    </p>
                </form>
            </div>
        </>
    );
};

export default PasswordReset;
