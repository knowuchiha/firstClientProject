import React, { useState } from "react";
import { HomeData } from "../shared/HomeData";
import Carousel from "react-bootstrap/Carousel";

const MyCarousel = () => {
    const items = HomeData.images;
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {items.map((item, index) => {
                return (
                    <Carousel.Item key={index}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="d-block w-100"
                            src={item.img}
                            alt={item.title}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>

        // <div
        //     id="carouselExampleIndicators"
        //     className="carousel slide "
        //     data-bs-ride="false"
        //     data-bs-interval="false"
        //     data-bs-pause="false"
        // >
        //     <div className="carousel-indicators">
        //         <button
        //             type="button"
        //             data-bs-target="#carouselExampleIndicators"
        //             data-bs-slide-to="0"
        //             className="active"
        //             aria-current="true"
        //             aria-label="Slide 1"
        //         ></button>
        //         <button
        //             type="button"
        //             data-bs-target="#carouselExampleIndicators"
        //             data-bs-slide-to="1"
        //             aria-label="Slide 2"
        //         ></button>
        //         <button
        //             type="button"
        //             data-bs-target="#carouselExampleIndicators"
        //             data-bs-slide-to="2"
        //             aria-label="Slide 3"
        //         ></button>
        //         <button
        //             type="button"
        //             data-bs-target="#carouselExampleIndicators"
        //             data-bs-slide-to="3"
        //             aria-label="Slide 4"
        //         ></button>
        //         <button
        //             type="button"
        //             data-bs-target="#carouselExampleIndicators"
        //             data-bs-slide-to="4"
        //             aria-label="Slide 5"
        //         ></button>
        //         <button
        //             type="button"
        //             data-bs-target="#carouselExampleIndicators"
        //             data-bs-slide-to="5"
        //             aria-label="Slide 6"
        //         ></button>
        //     </div>
        //     <div className="carousel-inner">
        //         <Slides />
        //     </div>
        //     <button
        //         className="carousel-control-prev"
        //         type="button"
        //         data-bs-target="#carouselExampleIndicators"
        //         data-bs-slide="prev"
        //     >
        //         <span
        //             className="carousel-control-prev-icon"
        //             aria-hidden="true"
        //         ></span>
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button
        //         id="next-btn"
        //         className="carousel-control-next"
        //         type="button"
        //         data-bs-target="#carouselExampleIndicators"
        //         data-bs-slide="next"
        //     >
        //         <span
        //             className="carousel-control-next-icon"
        //             aria-hidden="true"
        //         ></span>
        //         <span className="visually-hidden">Next</span>
        //     </button>
        // </div>
    );
};

export default MyCarousel;
