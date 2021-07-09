import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import MyCarousel from "./MyCarousel";
import CorporateLeaders from "./CorporateLeaders";
import { HomeData } from "../shared/HomeData";
import { Link } from "react-router-dom";

function Home() {
    const Models = () => {
        return HomeData.images.map((item, index) => {
            if (index === 2 || index === 4) {
                return (
                    <Fade left duration={1000 + (index % 3) * 150}>
                        <div key={item.title} className="model">
                            <div className="img-thumbnail shadow-lg">
                                <div
                                    className="disabled"
                                    to={`${item.link}`}
                                    target="_blank"
                                >
                                    <img src={item.img} alt={item.title} />
                                    <div className="model-title">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                );
            }
            return (
                <Fade left duration={1000 + (index % 3) * 150}>
                    <div key={item.title} className="model">
                        <div className="img-thumbnail shadow-lg model-scale">
                            <Link to={`${item.link}`} target="_blank">
                                <img src={item.img} alt={item.title} />
                                <div className="model-title">{item.title}</div>
                            </Link>
                        </div>
                    </div>
                </Fade>
            );
        });
    };
    return (
        <>
            <MyCarousel />
            <div className="welcome-title">
                <div className="title">
                    <Zoom left cascade delay={0} duration={1000}>
                        Welcome To
                    </Zoom>
                    <Zoom left cascade delay={0} duration={1000}>
                        KSS ENGINEERING
                    </Zoom>
                    <small>
                        <Zoom left cascade delay={0} duration={1000}>
                            our goal is always 100% customer satisfaction
                        </Zoom>
                    </small>
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
