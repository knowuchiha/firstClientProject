import React, { useEffect } from "react";

import { HomeData } from "../shared/HomeData";

const items = HomeData.images;

const MyCarousel = (props) => {
    useEffect(() => {
        const next = document.getElementById("next-btn");
        setInterval(function () {
            next.click();
        }, 5000);
    }, []);
    function Slides() {
        return (
            <>
                {items.map((item, index) => {
                    if (index === 0) {
                        return (
                            <div key={index} className="carousel-item active ">
                                <img src={item.img} alt={item.title} />
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className="carousel-item">
                                <img src={item.img} alt={item.title} />
                            </div>
                        );
                    }
                })}
            </>
        );
    }
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide "
            data-bs-ride="false"
            data-bs-interval="false"
            data-bs-pause="false"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                ></button>
            </div>
            <div className="carousel-inner">
                <Slides />
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                id="next-btn"
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default MyCarousel;
