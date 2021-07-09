import React from "react";

export default function ModalComponent(props) {
    function Indicators() {
        return (
            <>
                {props.ProjectData[props.data].data.map((item, index) => {
                    if (props.id === index) {
                        return (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#projectCarousel"
                                data-bs-slide-to={index}
                                className="active"
                                aria-current="true"
                                aria-label={`slide ${index}`}
                            ></button>
                        );
                    } else {
                        return (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#projectCarousel"
                                data-bs-slide-to={index}
                                aria-label={`slide ${index}`}
                            ></button>
                        );
                    }
                })}
            </>
        );
    }
    function Slides() {
        return (
            <>
                {props.ProjectData[props.data].data.map((item, index) => {
                    if (props.id === index) {
                        return (
                            <div className="carousel-item active" key={index}>
                                <div className="project-img-title">
                                    {item.projectName
                                        ? item.projectName
                                        : "photo"}
                                </div>
                                <img
                                    src={item.img}
                                    className="d-block w-100"
                                    alt={item.projectName}
                                />
                            </div>
                        );
                    } else {
                        return (
                            <div className="carousel-item" key={index}>
                                <div className="project-img-title">
                                    {item.projectName
                                        ? item.projectName
                                        : "photo"}
                                </div>
                                <img
                                    src={item.img}
                                    className="d-block w-100"
                                    alt={item.projectName}
                                />
                            </div>
                        );
                    }
                })}
            </>
        );
    }

    return (
        <div className="modal fade" id="ProjectModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.data}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body shadow">
                        <div
                            id="projectCarousel"
                            className="carousel slide"
                            data-bs-interval="false"
                        >
                            <div className="carousel-indicators">
                                <Indicators />
                            </div>
                            <div className="carousel-inner">
                                <Slides />
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#projectCarousel"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#projectCarousel"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
