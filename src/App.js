import "./App.css";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Freight from "./components/Freight/Freight";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <Freight></Freight>
            <Footer></Footer>
        </div>
    );
}

export default App;
