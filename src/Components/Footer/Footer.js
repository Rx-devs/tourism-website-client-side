import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer py-5">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <h2>TravelExpress</h2>
                        <p className="text-color">Travel where you wanna go</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4>CONTACT INFO</h4>
                        <div>
                            <p className="text-color">732/21 Second Street, Manchester, King Street, Kingston United Kingdom</p>
                            <p className="text-color">345-677-554</p>
                            <p className="text-color">info@altairtheme.com</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4>TAGS</h4>
                        <Nav>
                            <Link className="text-color" to="/home">Home</Link>
                            <Link className="text-color" to="/home">Travel</Link>
                            <Link className="text-color" to="/home">Bookings</Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;