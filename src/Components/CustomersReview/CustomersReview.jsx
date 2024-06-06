import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CustomersReview = () => {
    return (
        <div className="py-4">
            <Container>
                <h2 className="text-center my-4">WHAT CUSTOMERS SAY</h2>
                <Row>
                    <Col className="mb-3" sm={12} md={6}>
                        <Card className="mx-auto p-4">
                            <div>
                                <p>“Most beautiful place, outstanding service, luxury villas, great dive and marine centre, well trained, friendly and super polite staff, fantastic selection of programmes and restaurants, great selection of quality...”

                                    “We have enjoyed our honeymoon in Baros Maldive The food was delicious The spa was fabulous Luxury Experience Resort Entertainment, weather, service, Clean, Beach all Perfect.”</p>
                                <p className="text-muted">Mark AnthonyCEO-WikiMedia</p>

                            </div>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="mx-auto p-4">
                            <div>
                                <p>“It was a best ever holyday that I and my wife had with furaveri island, the resort offer verity of selection activities and food and beverage, it was all luxury where our stay was fulfilled, I would like to thank...”

                                    “It may be good for families, maybe groups of friends who are looking for affordable luxury but it is very possible that couples may be disappointed.”</p>
                                <p className="text-muted">Christina HardyMarketing Manager-Red Inc.</p>

                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default CustomersReview;