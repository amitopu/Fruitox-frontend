import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Additems from "./components/AddItems/Additems";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import Register from "./components/Register/Register";
import UpdateItems from "./components/UpdateItems/UpdateItems";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route
                    path="/passwordreset"
                    element={<PasswordReset></PasswordReset>}
                ></Route>
                <Route path="/additems" element={<Additems></Additems>}></Route>
                <Route
                    path="/updateitems/:id"
                    element={<UpdateItems></UpdateItems>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
