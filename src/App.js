import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Additems from "./components/AddItems/Additems";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import UpdateItems from "./components/UpdateItems/UpdateItems";
import auth from "./firebase.init";

export const userContext = createContext(undefined);

function App() {
    const [user, loading] = useAuthState(auth);
    return (
        <userContext.Provider value={[user, loading]}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route
                        path="/register"
                        element={<Register></Register>}
                    ></Route>
                    <Route path="/blog" element={<Blog></Blog>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route
                        path="/passwordreset"
                        element={<PasswordReset></PasswordReset>}
                    ></Route>
                    <Route
                        path="/additems"
                        element={
                            <RequireAuth>
                                <Additems></Additems>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="/updateitems/:id"
                        element={
                            <RequireAuth>
                                <UpdateItems></UpdateItems>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="inventory/:id"
                        element={<Inventory></Inventory>}
                    ></Route>
                    <Route
                        path="manageinventory"
                        element={
                            <RequireAuth>
                                <ManageInventory></ManageInventory>
                            </RequireAuth>
                        }
                    ></Route>
                </Routes>
            </div>
        </userContext.Provider>
    );
}

export default App;
