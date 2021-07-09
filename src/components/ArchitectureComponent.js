import React, { useState } from "react";
import { HomeData } from "../shared/HomeData";
import { ProjectData } from "../shared/architectureProject";
import Zoom from "react-reveal/Zoom";
import AccordionComponent from "./AccordionComponent";
import ModalComponent from "./ModalComponent";

const Data = HomeData.images[0];
export default function ArchitectureComponent() {
    const [modalData, setModalData] = useState({
        name: "Assam Tea Center",
        id: 0,
    });

    function launchModal(id, project) {
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
                        <div className="service-header">
                            Projects Done By Us
                        </div>
                    </div>
                </div>
                <div className="project-accordions">
                    {Object.keys(ProjectData).map((key, index) => {
                        const name = key.split(" ")[0];
                        return (
                            <AccordionComponent
                                key={index}
                                id={name}
                                title={key}
                                btn={launchModal}
                                ProjectData={ProjectData}
                            />
                        );
                    })}
                </div>
                <div className="container">
                    <ModalComponent
                        data={modalData.name}
                        id={modalData.id}
                        ProjectData={ProjectData}
                    />

                    <div className="row">
                        <button
                            id="modal-btn"
                            type="button"
                            className="btn btn-primary"
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
