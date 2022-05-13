import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLoadSingleItem from "../../scripts/Hooks/loadSingleItem";

const Inventory = () => {
    const { id } = useParams();
    const item = useLoadSingleItem(id);
    const navigate = useNavigate();
    return (
        <div>
            <p>{item.itemName}</p>
            <p>{item.price}</p>
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
