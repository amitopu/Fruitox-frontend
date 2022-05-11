import "./App.css";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Freight from "./components/Freight/Freight";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <Freight></Freight>
        </div>
    );
}

export default App;
