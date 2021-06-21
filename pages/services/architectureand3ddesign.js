import React, { useState, useEffect } from "react";
import Head from "next/head";
import { HomeData } from "../../shared/HomeData";
import ProjectData from "../../shared/architectureProject";
import ServiceCard from "../../components/ServiceCard";
import TeamCard from "../../components/TeamCard";
import Zoom from "react-reveal/Zoom";
import ModalComponent from "../../components/ModalComponent";

export default function ArchitectureComponent() {
    const Data = HomeData.images[0];
    const [firstRender, setFirstRender] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState("");

    function launchModal(id) {
        console.log(`modal-clicked`);
        setModalData(ProjectData[id].img);
        setModal((prev) => !prev);
    }

    function modalClose() {
        setModal(false);
    }

    return (
        <>
            <Head>
                <title>{Data.title}</title>
            </Head>
            <div className="service-component">
                <div className="service-main">
                    <div className="main-img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
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
                                        key={index}
                                        name={data.projectName}
                                        img={data.img}
                                        modalbtn={launchModal}
                                        id={index}
                                    />
                                );
                            })}
                            <ModalComponent
                                img={modalData}
                                show={modal}
                                handleClose={modalClose}
                            />
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
                            className="btn btn-primary"
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
