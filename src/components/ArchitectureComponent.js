import React from "react";
import { HomeData } from "../shared/HomeData";
import ServiceCard from "./ServiceCard";
import TeamCard from "./TeamCard";

const Data = HomeData.images[0];
export default function ArchitectureComponent() {
    return (
        <>
            <div className="service-component">
                <div className="service-main">
                    <div className="main-img">
                        <img src={`${Data.img}`} alt="..." />
                    </div>
                    <div className="main-title">
                        <div className="centered">{Data.title}</div>
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
                            <TeamCard name="James Potter" title="Designation" />
                            <TeamCard name="Laura Doe" title="Designation" />
                            <TeamCard name="Carl John" title="Designation" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
