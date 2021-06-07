import React from "react";
import MyCarousel from "./MyCarousel";
import { HomeData } from "../shared/HomeData";

function Home() {
    const Models = () => {
        return HomeData.images.map((item) => {
            return (
                <div className="model">
                    <div className="img-thumbnail">
                        <img src={item.img} alt={item.title} />
                        <div className="model-title">{item.title}</div>
                    </div>
                </div>
            );
        });
    };
    return (
        <>
            <MyCarousel />
            <div className="container">
                <div className="row">
                    <div className="dealing-title">Our Services</div>
                    <div className="Model-grid">
                        <Models />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
