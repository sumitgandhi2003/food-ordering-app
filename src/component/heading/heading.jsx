import "./heading.css";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.svg";
import { useState, useEffect } from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";

const Heading = ({ login }) => {
    const [btnName, setBtnName] = useState("Login");
    const [isLogin, setIsLogin] = login;

    useEffect(() => {
        localStorage.setItem("isLogin", isLogin);
    }, [isLogin]);

    return (
        <div className="nav-bar">
            <div id="logo-img">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <ul id="nav-link">
                <div id="nav-link-items">
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about"> About Us </Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact US </Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <Button
                        className="login-btn"
                        ButtonText={btnName}
                        onClick={() => {
                            setIsLogin(isLogin ? false : true);
                            setBtnName(
                                btnName === "Login" ? "Logout" : "Login"
                            );
                        }}
                    />
                </div>
                <div id="menu">
                    <img src={menu} alt="menu" />
                </div>
            </ul>
        </div>
    );
};

export default Heading;
