import React from "react";
import useLoadItems from "../../Hooks/useLoadAllItems";
import SingleItem from "../SingleItem/SingleItem";

const ManageInventory = () => {
    const items = useLoadItems();
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <SingleItem key={item._id} item={item}></SingleItem>
            ))}
        </div>
    );
};

export default ManageInventory;
