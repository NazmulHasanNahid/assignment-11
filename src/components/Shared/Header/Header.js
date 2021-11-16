import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar
                className="py-3 bg-info "
                collapseOnSelect
                expand="lg"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className="d-flex align-items-center"
                    >
                        <img
                            className="headerLogo"
                            src="https://i.ibb.co/dk57DpV/logo1-removebg-preview-1.png"
                            alt=""
                        />
                        <p className="fs-3 fw-bold text-white logo">Travel</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="text-white fw-bold" as={Link} to="/home">
                                Home
                            </Nav.Link>
                            {user?.email && (
                                <>
                                    <Nav.Link className="text-white fw-bold" as={Link} to="/mybooking">
                                        Bookings
                                    </Nav.Link>
                                    <Nav.Link className="text-white fw-bold" as={Link} to="/managebooking">
                                        Manage Bookings
                                    </Nav.Link>
                                    <Nav.Link className="text-white fw-bold" as={Link} to="/addnewbooking">
                                        New Bookings
                                    </Nav.Link>
                                </>
                            )}
                            <Nav.Link className="text-white fw-bold" as={Link} to="/about">
                                About Us
                            </Nav.Link>
                            <Nav.Link className="text-white fw-bold" as={Link} to="/contact">
                                Contact
                            </Nav.Link>
                        </Nav>

                        {user?.email ? (
                            <span>
                                <span className="username">
                                    {user?.displayName}
                                </span>
                                <span className=" logout" onClick={logOut}>
                                    Log Out
                                </span>
                            </span>
                        ) : (
                            <Nav>
                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    className="fs-5 text-white fw-bold"
                                >
                                    Log in
                                </Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
