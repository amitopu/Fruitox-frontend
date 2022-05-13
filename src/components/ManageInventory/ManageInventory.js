import React from "react";
import useLoadItems from "../../scripts/Hooks/loadAllItems";
import SingleItem from "../SingleItem/SingleItem";

const ManageInventory = () => {
    const items = useLoadItems();
    return (
        <div>
            {items.map((item) => (
                <SingleItem key={item._id} item={item}></SingleItem>
            ))}
        </div>
    );
};

export default ManageInventory;
