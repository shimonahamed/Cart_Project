import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/image/logo.png"
import Helper from "../utility/Helper.jsx";

const NavberPage = () => {
    const Logout=()=>{
        sessionStorage.clear();
        window.location.href="/"
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary bg-white shadow">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img alt="" className="nav-logob logo" src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink className="nav-link" to="/">Home</NavLink>

                        {
                            Helper.isLogin() && (
                                <NavLink className="nav-link" to="/cartList">Cart List</NavLink>
                            )
                        }

                    </Nav>
                    {
                        Helper.isLogin()? (
                            <button onClick={Logout} className="btn btn-danger">Logout</button>

                        ): (
                            <Link className="btn btn-success" to="/login">Login</Link>


                        )
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavberPage;