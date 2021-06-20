import React, { useState } from "react";
import { HomeData } from "../shared/HomeData";
import ProjectData from "../shared/architectureProject";
import ServiceCard from "./ServiceCard";
import TeamCard from "./TeamCard";
import Zoom from "react-reveal/Zoom";
import ModalComponent from "./ModalComponent";

const Data = HomeData.images[0];
export default function ArchitectureComponent() {
    const [modalData, setModalData] = useState("");

    function launchModal(id) {
        setModalData(ProjectData[id].img);
        const btn = document.getElementById("modal-btn");
        return btn.click();
    }

    return (
        <>
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
                        <div className="service-header">
                            Projects Done By Us
                        </div>
                    </div>
                    <div className="row">
                        <div className="project-cards">
                            {ProjectData.map((data, index) => {
                                return (
                                    <ServiceCard
                                        name={data.projectName}
                                        img={data.img}
                                        modalbtn={launchModal}
                                        id={index}
                                    />
                                );
                            })}
                            <ModalComponent img={modalData} />
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
                    <div className="row">
                        <button
                            id="modal-btn"
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Launch demo modal
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
