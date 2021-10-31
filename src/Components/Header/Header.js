import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">TravelExpress</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="navLink" to="/home">Home</Link>
                        </Nav>
                        <Nav className="m-auto">
                        <Link className="navLink" to="/addBookingPlace">Add A Booking Offer</Link>
                            {
                                user.email && <Link className="navLink" to="/myBookings">My Bookings</Link>
                            }
                            {
                                user.email && <Link className="navLink" to="/manageAllBookings">Manage All Bookings</Link>
                            }
                            {/* <Link to="/"></Link> */}
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <span className="text-light" style={{padding:'4px 12px'}}>{user.displayName}</span>
                    
                            {
                                user.email ?
                                    <button className="logOut-btn" onClick={logOut}>Log Out</button>
                                    :
                                    <Link className="navLink" to="/login">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;