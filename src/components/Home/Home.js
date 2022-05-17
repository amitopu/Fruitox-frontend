import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Freight from "../Freight/Freight";
import Header from "../Header/Header";
import ItemsSection from "../ItemsSection/ItemsSection";
import Title from "../Title/Title";

const Home = () => {
    return (
        <div>
            <Title></Title>
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <ItemsSection></ItemsSection>
            <Freight></Freight>
            <Footer></Footer>
        </div>
    );
};

export default Home;
