import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Assets/Images/Banner/B-1.jpg';
import img2 from '../../Assets/Images/Banner/B-2.jpeg';
import img3 from '../../Assets/Images/Banner/B-3.jpeg';
import './Banner.css';


const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 b-img1"
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 b-img2"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 b-img3"
                    src={img3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;