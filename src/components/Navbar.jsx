import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Image, Popover, OverlayTrigger } from "react-bootstrap";
import logo from "../assets/logo-2.png";
import icon from "../assets/logo-1.png";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function NavbarMenu() {
    const [p_counter, setCounter] = useState(0);
    const { counter } = useSelector((state) => state.product);
    const [p_cart, setP_cart] = useState([]);
    const { cart } = useSelector((state) => state.product);

    useEffect(() => {
        setCounter(counter);
    }, [counter]);

    useEffect(() => {
        setP_cart(cart);
    }, [cart]);

    const shortCart = p_cart.map((wishlist) => (
        <div
            className="container-fluid shortcart-card p-0 mt-2"
            key={wishlist.id}
        >
            <div className="card-body d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img
                        className="cart-img mr-3 shortcart-img"
                        src={wishlist.productImage}
                        alt=""
                        style={{ width: "70px", height: "70px" }}
                    />
                    <div className="d-flex flex-column">
                        <span className="fs-6 fw-normal">
                            <b>{wishlist.productName}</b>
                        </span>
                    </div>
                </div>
                <span className="fs-6 fw-light"></span>
            </div>
        </div>
    ));

    const popoverClick = (
        <Popover title="Popover bottom">
            <div className="container p-2">
                <div className="text-center shortcart-title">
                    <b>Your Cart</b>
                </div>
                <Link to="/cart">
                    <b>See details</b>
                </Link>
                <div>{shortCart}</div>
            </div>
        </Popover>
    );

    return (
        <div>
            <Navbar bg="light" expand="lg" className="shadow-sm">
                <Container className="m-auto">
                    <Link to="/faud_desserts">
                        <Navbar.Brand>
                            <Image
                                src={icon}
                                alt="icon"
                                className="icon-logo"
                            />
                            <Image
                                src={logo}
                                alt="logo"
                                className="navbar-logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown
                                title="Menu"
                                id="basic-nav-dropdown"
                                className="ml-2"
                            >
                                <NavDropdown.Item>
                                    <Link to="/cart" className="link-dropdown">
                                        Cart{" "}
                                        <span class="badge badge-dark badge-pill">
                                            {p_counter}
                                        </span>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link
                                        to="/faud_desserts"
                                        className="link-dropdown"
                                    >
                                        About
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link
                                        to="/faud_desserts"
                                        className="link-dropdown"
                                    >
                                        Contact
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/admin" className="link-dropdown">
                                        Admin
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <span className="ml-auto mr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="currentColor"
                                class="bi bi-envelope"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                        </span>
                        <span className="mr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="bi bi-bell-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                            </svg>
                        </span>
                        <OverlayTrigger
                            trigger="click"
                            placement="bottom"
                            overlay={popoverClick}
                        >
                            <span className>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    fill="black"
                                    class="bi bi-cart-check-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                                <span class="badge badge-success badge-pill">
                                    {p_counter}
                                </span>
                            </span>
                        </OverlayTrigger>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarMenu;
