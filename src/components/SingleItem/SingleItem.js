import React from "react";

const SingleItem = (props) => {
    const { itemName, price, quantity } = props.item;
    return (
        <div>
            <p>{itemName}</p>
            <p>{price}</p>
            <p>{quantity}</p>
        </div>
    );
};

export default SingleItem;
