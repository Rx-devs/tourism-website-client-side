import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './AddBookingPlace.css';
const axios = require('axios');

const AddBookingPlace = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('https://rocky-brushlands-10899.herokuapp.com/booking_places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added succesfully');
                    reset();
            }
        })
    };

    return (
        <div>
            <Container>
                <h3 className="text-center my-4">Add New Booking Place</h3>
                <form className="addBookings d-flex flex-column align-items-center justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Insert Image Url" {...register("img")} />
                    <input placeholder="Booking Place Name" {...register("name", { required: true, maxLength: 20 })} />
                    <textarea placeholder="Description" {...register("description")} />
                    <input placeholder="Booking Price" type="number" {...register("price")} />
                
                    <input type="submit" />
                </form>
            </Container>
        </div>
    );
}

export default AddBookingPlace;

