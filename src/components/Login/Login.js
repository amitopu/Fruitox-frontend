import React, { createContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
    useAuthState,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Spinner from "../Spinner/Spinner";
import Footer from "../Footer/Footer";
import Title from "../Title/Title";

const Login = () => {
    // for form data and validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    // sign in with email and pass hook
    const [signInWithEmailAndPassword, , loading, error] =
        useSignInWithEmailAndPassword(auth);

    //sign in with google hook
    const [signInWithGoogle, , updating, errorGoogle] =
        useSignInWithGoogle(auth);

    // hook for getting user object
    const [user] = useAuthState(auth);

    // hooks and states to get regirection location of intended page
    const navigate = useNavigate();
    let location = useLocation();
    let path = location.state?.from?.pathname || "/";

    // for capturing emaill only for sending pass reset link
    // const captureEmail = (event) => {
    //     let email = event.target.value;
    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //         setEmail(email);
    //     } else {
    //         setEmail("");
    //     }
    // };

    // handling submit data for login with email and pass
    const onSubmit = async (data) => {
        const { email, password } = data;
        await signInWithEmailAndPassword(email, password);
    };

    // handle sign in with google
    const googleSignIn = async () => {
        await signInWithGoogle();
    };

    // handler for password reset
    // password reset hook
    // const [sendPasswordResetEmail, sending, errorReset] =
    //     useSendPasswordResetEmail(auth);
    // const [email, setEmail] = useState("");
    // const resetPassword = () => {
    //     if (email) {
    //         sendPasswordResetEmail(email);
    //         toast("Sending Password Reset Link");
    //         console.log(email);
    //     } else {
    //         toast("Enter email please!!");
    //     }
    // };

    useEffect(() => {
        if (user) {
            console.log(user);
            navigate(path, { replace: true });
        }
    }, [user, path, navigate]);

    if (loading || updating) {
        return <Spinner></Spinner>;
    }

    return (
        <>
            <Header></Header>
            <div className="md:w-1/2 w-3/4 mx-auto h border-4 border-orange-600 rounded-lg mt-16 mb-10">
                <h1 className="text-2xl mt-5 mb-2 p-5 text-center">
                    Please Login ...
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="text-xl ml-[11%]" htmlFor="email">
                        Email
                    </label>
                    <br />

                    {/* input for email  */}
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
                        // onBlur={captureEmail}
                    />
                    {errors.email && (
                        <p className="text-red-600 text-center warning mb-2">
                            {errors.email.message}
                        </p>
                    )}

                    <label className="text-xl ml-[11%]" htmlFor="password">
                        Password
                    </label>
                    <br />

                    {/* input for password  */}
                    <input
                        type="password"
                        className="block border-2 border-orange-600 w-4/5 h-10 rounded-md mx-auto mb-2 pl-3"
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

                    {/* input for submit */}
                    <input
                        className="block border-2 text-white font-bold hover:font-extrabold bg-orange-600 hover:bg-orange-700 w-4/5 h-10 rounded-md mx-auto mt-3 mb-3"
                        value="Submit"
                        type="submit"
                    />
                    <br />
                </form>

                {/* extra links  */}
                <p className="text-xl text-center">
                    Don't have an account?{" "}
                    <span className="font-bold text-orange-600">
                        <Link to="/register">Register</Link>
                    </span>
                </p>
                <p className="mt-2 text-center text-xl">
                    Or
                    <span>
                        <button
                            className="text-orange-600 ml-2 font-bold"
                            onClick={() => {
                                navigate("/passwordreset");
                            }}
                        >
                            Forgot Password
                        </button>
                    </span>
                </p>
                <div className="flex mx-auto justify-center items-center mt-5">
                    <div className="w-2/5 h-[2px] bg-orange-600"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-600 mx-1"></div>
                    <div className="w-2/5 h-[2px] bg-orange-600"></div>
                </div>

                {/* google sign in button */}
                <button
                    className="flex justify-center items-center mx-auto mt-5 text-center w-3/4 md:w-5/7 lg:w-1/2 h-10 border-[2px] border-orange-600 rounded mb-3"
                    onClick={googleSignIn}
                >
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="32"
                            height="32"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                            <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            ></path>
                            <path
                                fill="#4caf50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            ></path>
                            <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                        </svg>
                    </span>
                    <span>SignIn With Google</span>
                </button>

                {/* Showing error messages */}
                <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                    {error?.message}
                </p>
                <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                    {errorGoogle?.message}
                </p>
            </div>
            <Title></Title>
            <Footer></Footer>
        </>
    );
};

export default Login;
