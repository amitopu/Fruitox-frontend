import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Freight from "../Freight/Freight";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <Freight></Freight>
            <Footer></Footer>
        </div>
    );
};

export default Home;
