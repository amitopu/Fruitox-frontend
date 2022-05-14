import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLoadSingleItem from "../../Hooks/useLoadSingleItem";

const Inventory = () => {
    const { id } = useParams();
    const [article] = useLoadSingleItem(id);

    const { status } = article;
    console.log(status);
    const navigate = useNavigate();
    return (
        <div>
            <p>{article.status}</p>
            <button
                onClick={() => {
                    navigate("/manageinventory");
                }}
            >
                Manage Inventory
            </button>
        </div>
    );
};

export default Inventory;
