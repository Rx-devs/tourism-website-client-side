import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
const axios = require('axios');

const PurchaseBooking = () => {
    const { _id } = useParams(); 
    
    const [ bookingPlace, setBookingPlace ] = useState({});
    useEffect(() => {
        fetch(`https://rocky-brushlands-10899.herokuapp.com/booking_places/${_id}`)
            .then(res => res.json())
            .then(data => setBookingPlace(data))          
    }, []);
    
    const { register, handleSubmit, reset} = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = data => {
        axios.post('https://rocky-brushlands-10899.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Purchase Booking Sucessfully');
                    reset();
            }
        })
    };

    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col className="mb-3" sm={12} md={6}>
                        <Card>
                            <Card.Img variant="top" className="banner-img" style={{ height: '250px' }} src={bookingPlace.img} />
                            <Card.Body>
                                <Card.Title>
                                    {bookingPlace.name}
                                </Card.Title>
                                <Card.Text>
                                    <h6>{bookingPlace.title}</h6>
                                    <div>{bookingPlace.description}</div>
                                    <div>Best Trip for {bookingPlace.travelTrip}</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="py-5">
                            <h3 className="text-center mb-4">Fill The Form</h3>
                            <form className="addBookings d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                                <input  className="w-75" required placeholder={bookingPlace.name} {...register("placeName")}/>
                                <input className="w-75" required placeholder="Your Name" {...register("name")} />
                                <input className="w-75" required placeholder="Email" {...register("email")} />
                                <input className="w-75" required placeholder="Address" {...register("address")} />
                                <input className="w-75" placeholder="Contact Number"
                                    type="number" {...register("phoneNumber")} />
                                <input className=" w-75 btn btn-danger border-0" type="submit" value="Purchase" />
                            </form>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
}

export default PurchaseBooking;