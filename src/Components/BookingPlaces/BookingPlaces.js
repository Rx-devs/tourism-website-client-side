import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Place from "../Place/Place";

const BookingPlaces = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://rocky-brushlands-10899.herokuapp.com/booking_places')
            .then(res => res.json())
            .then(data => setPlaces(data))
        
    }, []);
    return (
        <div>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        places.map(place => <Place
                            key={place.name}
                            place={place}
                        
                        ></Place>)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default BookingPlaces;