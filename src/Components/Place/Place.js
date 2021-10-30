import React from "react";
import { Card, Col } from "react-bootstrap";
import './Place.css';
const Place = (props) => {
    const { name, description, img, travelTrip, price } = props.place;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="card-img" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                            {travelTrip}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <p>{price} USD</p>
                        {/* <Link to="/">
                        <Button>Purchase</Button>
                        </Link> */}
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
}

export default Place;