import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import "./App.css";
import NavbarMenu from "./components/Navbar";
import Cart from "./pages/Cart";
import AddProduct from "./pages/Admin";
import ComingSoon from "./pages/ComingSoon";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <NavbarMenu />
            <div className="container">
                <Routes>
                    <Route path="/faud_desserts" element={<Products />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/admin" element={<AddProduct />}></Route>
                    <Route path="/comingsoon" element={<ComingSoon />}></Route>
                    <Route path="/login" element={<LoginForm />}></Route>
                    <Route path="/register" element={<RegisterForm />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
