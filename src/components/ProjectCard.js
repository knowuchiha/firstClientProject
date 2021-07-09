import React from "react";

export default function ProjectCard(props) {
    const name = props.name ? props.name : "Photo";
    return (
        <>
            <div
                className="card border-light"
                onClick={() => props.modalbtn(props.id, props.project)}
            >
                <div className="project shadow">
                    <div className="project-img">
                        <img
                            src="/assets/images/archProject.jpg"
                            alt="project pic"
                        />
                    </div>
                    <div className="project-title-overlay">
                        <div className="project-title">{name}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
