/* eslint-disable @next/next/no-img-element */
import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import MyCarousel from "./MyCarousel";
import CorporateLeaders from "./CorporateLeaders";
import { HomeData } from "../shared/HomeData";
import Link from "next/link";

function Home() {
    function Models() {
        return HomeData.images.map((item, index) => {
            return (
                <Fade left duration={1000 + (index % 3) * 150} key={item.title}>
                    <div className="model">
                        <div className="img-thumbnail shadow-lg">
                            <Link key={index} href={`${item.link}`} passHref>
                                <img src={item.img} alt={item.title} />
                            </Link>
                            <Link key={index} href={`${item.link}`} passHref>
                                <div className="model-title">{item.title}</div>
                            </Link>
                        </div>
                    </div>
                </Fade>
            );
        });
    }
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
                </div>
                <div className="row">
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
