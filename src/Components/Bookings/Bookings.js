import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Place from "../Place/Place";

const Bookings = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const url = "./fakeData.json"
        fetch(url)
            .then(res => res.json())
            .then(data => setPlaces(data))
        
    }, []);
    return (
        <div>
            <Container>
                <Row xs={1} md={3} className="g-4">
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

export default Bookings;