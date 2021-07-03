import React from "react";
import Fade from "react-reveal/Fade";

export default function ServiceCard(props) {
    const Project = props.img ? true : false;

    return (
        <>
            <Fade left delay={0} duration={1200}>
                <div
                    className={"card border-light shadow "}
                    onClick={
                        props.modalbtn
                            ? () => props.modalbtn(props.id, props.project)
                            : null
                    }
                >
                    {Project ? null : (
                        <div className="card-body">
                            <h5 className="card-subtitle mb-2 ">
                                {props.title}
                            </h5>

                            <p className="card-text">
                                About the kind of service we provide
                            </p>
                        </div>
                    )}
                    {Project ? (
                        <div className="project shadow">
                            <div className="project-title">{props.name}</div>
                            <div className="project-img">
                                <img src={props.img} alt="project pic" />
                            </div>
                        </div>
                    ) : null}
                </div>
            </Fade>
        </>
    );
}
