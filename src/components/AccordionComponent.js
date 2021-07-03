import React from "react";
import { ProjectData } from "../shared/architectureProject";
import ProjectCard from "./ProjectCard";

export default function AccordionComponent(props) {
    const Cards = () => {
        return (
            <>
                {ProjectData[props.title].data.map((item, index) => {
                    return (
                        <ProjectCard
                            key={item}
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
        <div class="accordion" id={`${props.id}-accordion`}>
            <div class="accordion-item shadow">
                <div class="accordion-header" id={`heading-${props.id}`}>
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${props.id}`}
                        aria-expanded="false"
                        aria-controls={props.id}
                    >
                        {ProjectData[props.title].project}
                    </button>
                </div>
                <div
                    id={props.id}
                    class="accordion-collapse collapse "
                    aria-labelledby={`heading-${props.id}`}
                    data-bs-parent={`#${props.id}-accordion`}
                >
                    <div class="accordion-body">
                        <div className="project-cards">
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
