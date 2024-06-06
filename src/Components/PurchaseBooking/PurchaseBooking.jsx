import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const PurchaseBooking = () => {
    const { _id } = useParams(); 
    const { user } = useAuth();
    const [ bookingPlace, setBookingPlace ] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/booking_places/${_id}`)
            .then(res => res.json())
            .then(data => setBookingPlace(data))          
    }, [_id]);
    
    const { register, handleSubmit, reset} = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = data => {
        axios.post('http://localhost:5000/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Purchase Booking Sucessfully');
                    reset();
            }
        })
    };

    const handlePurchase = () => {
        const order = {
            cus_name: user?.displayName,
            cus_email: user?.email,
            product_name: bookingPlace?.name,
            product_profile: bookingPlace?.description,
            product_image: bookingPlace?.img,
            total_amount: bookingPlace?.price,
        }
        fetch(`http://localhost:5000/init`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.replace(data)
            })
        
    }

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
                                    <button onClick={handlePurchase} className="btn btn-danger" >Purchase Now</button>
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
                                <input className=" w-75 btn btn-danger border-0" type="submit" value="Purchase Now" />
                            </form>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
}

export default PurchaseBooking;