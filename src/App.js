import "./App.css";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
        </div>
    );
}

export default App;
