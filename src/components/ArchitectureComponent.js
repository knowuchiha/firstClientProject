import React, { useState } from "react";
import { HomeData } from "../shared/HomeData";
import { ProjectData, PeopleData } from "../shared/architectureProject";
import ServiceCard from "./ServiceCard";
// import ProjectCard from "./ProjectCard";
import AccordionComponent from "./AccordionComponent";
import TeamCard from "./TeamCard";
import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
import ModalComponent from "./ModalComponent";

const Data = HomeData.images[0];
export default function ArchitectureComponent() {
    const [modalData, setModalData] = useState({ name: "Rahul Sharma", id: 0 });

    function launchModal(id, project) {
        console.log(`launch modal : ${project}`);
        setModalData({ name: project, id: id });

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
                            <ServiceCard title="Virtual reality" />
                            <ServiceCard title="Structure design" />
                            <ServiceCard title="consulting" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="service-header">
                            Projects Done By Us
                        </div>
                    </div>
                    <div className="row">
                        {Object.keys(ProjectData).map((key, index) => {
                            const name = key.split(" ")[0];
                            return (
                                <AccordionComponent
                                    key={index}
                                    id={name}
                                    title={key}
                                    btn={launchModal}
                                />
                            );
                        })}
                    </div>
                    <ModalComponent data={modalData.name} id={modalData.id} />
                    <div className="row">
                        <div className="core-team">Our Core team</div>
                    </div>
                    <div className="row">
                        <div className="core-team-cards">
                            {PeopleData.map((person, index) => {
                                return (
                                    <TeamCard
                                        name={person.name}
                                        title=""
                                        desc={person.description}
                                        facebook={person.facebook}
                                        id={index}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="row">
                        <button
                            id="modal-btn"
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ProjectModal"
                        >
                            Launch demo modal
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
