import React from "react";
import { Card, Col } from "react-bootstrap";

const Place = (props) => {
    const { name, description, img, travelTrip, price } = props.place;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                            {travelTrip}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <p>{price } USD</p>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
}

export default Place;