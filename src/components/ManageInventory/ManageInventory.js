import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SingleItem from "../SingleItem/SingleItem";
import Title from "../Title/Title";

const ManageInventory = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // getting total number of items
    useEffect(() => {
        axios
            .get("https://quiet-shore-21576.herokuapp.com/itemscount")
            .then((res) => {
                const count = res.data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
            })
            .catch((err) => setError(err.message));
    }, [size]);

    // getting desired number of items
    useEffect(() => {
        axios
            .get(
                `https://quiet-shore-21576.herokuapp.com/items?page=${page}&size=${size}`
            )
            .then((res) => setItems(res.data))
            .catch((err) => setError(err.message));
    }, [size, page]);

    return (
        <>
            <Header></Header>
            <div className="my-5 flex flex-wrap justify-center">
                <button
                    onClick={() => navigate("/additems")}
                    className="w-56 h-[40px] text-lg bg-orange-600 hover:bg-orange-700 rounded-md hover:font-bold bolck my-2 md:my-5 mx-3 text-white"
                >
                    Add New Items
                </button>
                <button
                    onClick={() => navigate("/myitems")}
                    className="w-56 h-[40px] text-lg bg-orange-600 hover:bg-orange-700 rounded-md hover:font-bold bolck my-2 md:my-5 mx-3 text-white"
                >
                    My Items
                </button>
            </div>
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-16 md:mt-12 mt-10 lg:px-16 md:px-8 px-4 mb-10">
                {items.map((item) => (
                    <SingleItem key={item._id} item={item}></SingleItem>
                ))}
            </div>
            <p className="my-3 text-center text-red-600 font-bold">{error}</p>

            {/* pagination section */}
            <div className="w-4/5 mx-auto flex justify-center mb-10">
                <button
                    onClick={() => setPage(0)}
                    className="text-white w-7 h-6 rounded bg-orange-500 mx-[1px]"
                >
                    {"<<"}
                </button>
                <button
                    onClick={() => setPage(page >= 1 ? page - 1 : 0)}
                    className="text-white w-7 h-6 rounded bg-orange-500 mx-[1px]"
                >
                    {"<"}
                </button>
                {[...Array(pageCount).keys()]
                    .slice(page <= 4 ? 0 : page - 4, page + 5)
                    .map((num) => (
                        <button
                            key={num}
                            className={`${
                                page === num
                                    ? "bg-orange-700 text-semibold"
                                    : ""
                            } text-white w-7 h-6 rounded bg-orange-500 mx-[1px]`}
                            onClick={() => setPage(num)}
                        >
                            {num + 1}
                        </button>
                    ))}
                <button
                    onClick={() =>
                        setPage(page < pageCount - 1 ? page + 1 : pageCount - 1)
                    }
                    className="text-white w-7 h-6 rounded bg-orange-500 mx-[1px]"
                >
                    {">"}
                </button>
                <button
                    onClick={() => setPage(pageCount - 1)}
                    className="text-white w-7 h-6 rounded bg-orange-500 mx-[1px]"
                >
                    {">>"}
                </button>
                <select
                    defaultValue={10}
                    onChange={(e) => {
                        setSize(e.target.value);
                        setPage(0);
                    }}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <Title></Title>
            <Footer></Footer>
        </>
    );
};

export default ManageInventory;
