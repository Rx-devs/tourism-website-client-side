import axios from "axios";
import React from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './AddBookingPlace.css';

const AddBookingPlace = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/booking_places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added succesfully');
                    reset();
            }
        })
    };

    return (
        <div className="py-4">
            <Container>
            <Card className="mx-auto py-3" style={{width:'400px'}}>
                <h3 className="text-center my-4">Add New Booking Offer</h3>
                
                <form className="addBookings d-flex flex-column align-items-center justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Insert Image Url" {...register("img")} />
                    <input placeholder="Booking Place Name" {...register("name", { required: true, maxLength: 20 })} />
                    <textarea placeholder="Description" {...register("description")} />
                    <input placeholder="Booking Price" type="number" {...register("price")} />
                    <input type="submit" />
                </form>
                </Card>
            </Container>
        </div>
    );
}

export default AddBookingPlace;

