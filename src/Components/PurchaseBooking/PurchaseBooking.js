import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PurchaseBooking = () => {
    const { _id } = useParams(); 
    
    const [ bookingPlace, setBookingPlace ] = useState({});
    useEffect(() => {
        fetch(`https://rocky-brushlands-10899.herokuapp.com/booking_places/${_id}`)
            .then(res => res.json())
            .then(data => setBookingPlace(data))          
    }, []);
    
    const purchaseHandler = _id => {
        console.log(_id);
    }

    return (
        <div>
            <Container>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" className="banner-img" src={bookingPlace.img} />
                    <Card.Body>
                        <Card.Title>{bookingPlace.name}</Card.Title>
                        <Card.Text>
                            {bookingPlace.description}
                        </Card.Text>
                        <Link to="/myBookings">
                            <Button onClick={()=> purchaseHandler(_id)} variant="primary">Purchase</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default PurchaseBooking;