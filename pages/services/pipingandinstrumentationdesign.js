/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { HomeData } from "../../shared/HomeData";
import ServiceCard from "../../components/ServiceCard";
import TeamCard from "../../components/TeamCard";
import Zoom from "react-reveal/Zoom";

export default function PipingComponent() {
    const Data = HomeData.images[2];
    return (
        <>
            <Head>
                <title>{Data.title}</title>
            </Head>
            <div className="service-component">
                <div className="service-main">
                    <div className="main-img">
                        <img src={`${Data.img}`} alt="..." />
                    </div>
                    <div className="main-title">
                        <div className="centered">
                            <Zoom left duration={1200}>
                                {Data.title}
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="service-header">What we serve</div>
                    </div>
                    <div className="row">
                        <div className="serve-cards">
                            <ServiceCard title="Architecture" />
                            <ServiceCard title="Design" />
                            <ServiceCard title="Consulting" />
                            <ServiceCard title="Innovation" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="core-team">Our Core team</div>
                    </div>
                    <div className="row">
                        <div className="core-team-cards">
                            <TeamCard
                                name="James Potter"
                                title="Designation"
                                id="james"
                            />
                            <TeamCard
                                name="Laura Doe"
                                title="Designation"
                                id="laura"
                            />
                            <TeamCard
                                name="Carl John"
                                title="Designation"
                                id="carl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
