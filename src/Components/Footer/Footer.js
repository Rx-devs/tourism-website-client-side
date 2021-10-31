import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer py-3 text-light bg-dark">
            <Container>
                <Row className="align-items-center my-2 g-4">
                    <Col xs={12} md={4}>
                        <div className="mb-3">
                            <h4>TRAVELExpress</h4>
                            <p className="text-color">Travel where you want to go</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="mb-3">
                            <h4>CONTACT INFO</h4>
                            <p className="text-color">Location: 732/21 Second Street, Manchester, King Street, Kingston United Kingdom</p>
                            <p className="text-color">Phone: 345-677-554</p>
                            <p className="text-color">Email: info@altairtheme.com</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="w-50 mx-md-auto">
                            <h4>TAGS</h4>
                            <Nav className="footer-links flex-column">
                                <Link className="text-color" to="/home">Home</Link>
                                <Link className="text-color" to="/login">Login</Link>
                                <Link className="text-color" to="/myBookings">My Bookings</Link>
                                <Link className="text-color" to="/manageAllBookings">Manage All Bookings</Link>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;