import React from "react";
import ProjectCard from "./ProjectCard";

export default function AccordionComponent(props) {
    const Cards = () => {
        return (
            <>
                {props.ProjectData[props.title].data.map((item, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            name={item.projectName}
                            project={props.title}
                            id={index}
                            img={item.img}
                            modalbtn={props.btn}
                        />
                    );
                })}
            </>
        );
    };
    return (
        <div className="accordion" id={`myAccordion-${props.id}`}>
            <div className="accordion-item ">
                <div className="accordion-header" id={`heading-${props.id}`}>
                    <div className="accordion-header-title shadow">
                        <div>{props.title}</div>
                        <div
                            className="acc-btn collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${props.id}`}
                            aria-expanded="false"
                            aria-controls={props.id}
                        >
                            <span className="fa fa-angle-down"></span>
                        </div>
                    </div>
                </div>
                <div
                    id={props.id}
                    className="accordion-collapse collapse "
                    aria-labelledby={`heading-${props.id}`}
                    data-bs-parent={`#myAccordion-${props.id}`}
                >
                    <div className="accordion-body">
                        <div className="project-cards">
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
