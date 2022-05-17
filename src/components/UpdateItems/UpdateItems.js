import React from "react";
// import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import useLoadSingleItem from "../../Hooks/useLoadSingleItem";
// import axios from "axios";
import { UpdateForm } from "./UpdateForm";
import Title from "../Title/Title";

const UpdateItems = () => {
    const { id } = useParams();
    // const navigate = useNavigate();
    const [item, error] = useLoadSingleItem(id);
    // const [error, setError] = useState(false);

    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm({
    //     mode: "onChange",
    // });

    // // for handling form submit
    // const onSubmit = (data) => {
    //     console.log(data);
    //     axios.put(`http://localhost:5000/item/${id}`, data).then((res) => {
    //         if (res.data.acknowledged && res.data.upsertedId) {
    //             setError(false);
    //             navigate(`/inventory/${res.data.upsertedId}`);
    //         } else if (res.data.acknowledged) {
    //             setError(false);
    //             navigate(`/inventory/${id}`);
    //         } else {
    //             setError(true);
    //         }
    //     });
    // };
    return (
        <>
            <Header></Header>
            {/* <div className="md:w-1/2 w-3/4 mx-auto h border-4 border-orange-600 rounded-lg mt-16 mb-10">
                <h1 className="text-2xl mt-5 mb-2 p-5 text-center">
                    Please Enter Item Details...
                </h1>
                place holder for form
                <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                    {error
                        ? "Something went wrong!! Please try again later"
                        : ""}
                </p>
            </div> */}
            {Object.keys(item).length !== 0 ? (
                <UpdateForm item={item}></UpdateForm>
            ) : (
                <p className="my-2 text-center text-red-600 font-bold">
                    {error}
                </p>
            )}
            <Title></Title>
            <Footer></Footer>
        </>
    );
};

export default UpdateItems;
