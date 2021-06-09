import React from "react";
import MyCarousel from "./MyCarousel";
import CorporateLeaders from "./CorporateLeaders";
import { HomeData } from "../shared/HomeData";
import { Link } from "react-router-dom";

function Home() {
    const Models = () => {
        return HomeData.images.map((item) => {
            return (
                <div key={item.title} className="model">
                    <div className="img-thumbnail">
                        <Link to={`/${item.title}`}>
                            <img src={item.img} alt={item.title} />
                            <div className="model-title">{item.title}</div>
                        </Link>
                        {/* <Link to={`/${item.title}`} className="model-details">
                            <h5>click for more ...</h5>
                        </Link> */}
                    </div>
                </div>
            );
        });
    };
    return (
        <>
            <MyCarousel />
            <div className="welcome-title">
                <div className="title">
                    Welcome To
                    <br /> KSS ENGINEERING <br />
                    <small>our goal is always 100% customer satisfaction</small>
                </div>
            </div>
            <div className="container">
                <div className="row" id="services">
                    <div className="dealing-title">Our Services</div>
                    <div className="Model-grid">
                        <Models />
                    </div>
                </div>
                <div id="corporateLeaders">
                    <CorporateLeaders />
                </div>
            </div>
        </>
    );
}

export default Home;
