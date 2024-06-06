import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import './ChoosingUs.css';

const ChoosingUs = () => {
    return (
        <div className="choose-us">
            <h2 className="text-center text-light">WHY CHOOSE US</h2>
            <Container className="my-5">
                <Row>
                    <Col className="mb-3" sm={12} md={4}>
                        <Card>
                        <div className="text-center p-4">
                            <h4 className="mb-4">Handpicked Hotels</h4>
                            <p>Thousands of satisfied clients are backing us! We got to exceed their great expectations.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                        </Card>

                    </Col>
                    <Col className="mb-3" sm={12} md={4}>
                        <Card>
                        <div className="text-center p-4">
                            <h4 className="mb-4">World Class Service</h4>
                            <p>Because quality does not mean expensive! We select the best partners for your best experience!</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                        <div className="text-center p-4">
                            <h4 className="mb-4">Best Price Guarantee</h4>
                            <p>You will find the best prices with us for you and we are willing to match any lower price rate.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    );
}

export default ChoosingUs;