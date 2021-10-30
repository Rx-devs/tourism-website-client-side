import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Place.css';
const Place = (props) => {
    const { name, description, img, travelTrip, price, _id } = props.place;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="card-img" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <p>{price} USD</p>
                        <Link to={`/purchaseBooking/${_id}`}>
                            <Button>Book Now</Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
}

export default Place;