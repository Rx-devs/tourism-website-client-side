import React from "react";
import Banner from "../Banner/Banner";
import BookingPlaces from "../BookingPlaces/BookingPlaces";
import ChoosingUs from "../ChoosingUs/ChoosingUs";
import CustomersReview from "../CustomersReview/CustomersReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookingPlaces></BookingPlaces>
            <ChoosingUs></ChoosingUs>
            <CustomersReview></CustomersReview>
        </div>
    )
}

export default Home;