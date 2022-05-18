import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

const SingleItem = (props) => {
    const {
        _id,
        itemName,
        price,
        supplierName,
        quantity,
        imageurl,
        unit,
        description,
        manager,
    } = props.item;
    const [user] = useContext(userContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // for handling delete button
    const handleDelete = (id) => {
        console.log(_id);
        if (user.displayName === manager || user.displayName === supplierName) {
            if (window.confirm("Do you really want to delete?")) {
                axios
                    .delete(
                        `https://quiet-shore-21576.herokuapp.com/delete/${id}`
                    )
                    .then((res) => {
                        if (res.data.deleted) {
                            navigate(0);
                        } else {
                            setError("Error Occured!! Item not deleted");
                        }
                    })
                    .catch((err) => {
                        setError(err);
                    });
            }
        } else {
            window.alert(
                "Sorry!!! You are not the manager/supplier of this item"
            );
        }
    };

    return (
        <div className="border-2 border-orange-600  rounded-lg">
            <div className="h-auto w-[100px] rounded-md border-orange-600 border-2 mx-auto m-3">
                <img
                    className="h-[100px] w-[100px]  rounded-md"
                    src={imageurl}
                    alt=""
                />
            </div>
            <p className="text-xl text-center my-2">Name: {itemName}</p>
            <p className="text-xl text-center my-2">
                Supplier name: {supplierName}
            </p>
            <p className="text-xl text-center my-2">
                Price: {price}$/{unit}
            </p>
            <p className="text-xl text-center my-2">
                Current stock: {quantity}
            </p>
            <p className="text-xl text-center my-2">
                Description: {`${description.slice(0, 101)}...`}
            </p>
            <div className="">
                <button
                    onClick={() => navigate(`/inventory/${_id}`)}
                    className="block w-[150px] h-[35px] text-xl bg-orange-600 hover:bg-orange-700 hover:font-semibold text-white mx-auto mb-2 rounded-md"
                >
                    See Details
                </button>
                <button
                    onClick={() => handleDelete(_id)}
                    className="block w-[150px] h-[35px] text-xl bg-orange-600 hover:bg-orange-700 hover:font-semibold text-white mx-auto mb-2 rounded-md"
                >
                    Delete Item
                </button>
                <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                    {error}
                </p>
            </div>
        </div>
    );
};

export default SingleItem;
