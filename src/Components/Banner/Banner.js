import React from "react";
import { Carousel } from "react-bootstrap";
import Img1 from "../../Utilities/images/sliderImages/banner-1.jpg";
import Img2 from "../../Utilities/images/sliderImages/banner-2.jpg";
import Img3 from "../../Utilities/images/sliderImages/banner-3.jpg";
import './banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel variant="light">
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>ITALY</p>
                        <h1>VENEZIA</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={Img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <p>SWITZERLAND</p>
                        <h1>ZURICH</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={Img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <p>PARIS</p>
                        <h1>PARIS</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Banner;