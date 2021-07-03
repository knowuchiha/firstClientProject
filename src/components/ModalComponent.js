import React from "react";
import { ProjectData } from "../shared/architectureProject";

export default function ModalComponent(props) {
    function Indicators() {
        return (
            <>
                {ProjectData[props.data].data.map((item, index) => {
                    if (props.id === index) {
                        console.log(props.id);
                        return (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#projectCarousel"
                                data-bs-slide-to={index}
                                class="active"
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
                {ProjectData[props.data].data.map((item, index) => {
                    if (props.id === index) {
                        return (
                            <div class="carousel-item active" key={index}>
                                <div className="project-img-title">
                                    {item.projectName
                                        ? item.projectName
                                        : "photo"}
                                </div>
                                <img
                                    src={item.img}
                                    class="d-block w-100"
                                    alt={item.projectName}
                                />
                            </div>
                        );
                    } else {
                        return (
                            <div class="carousel-item" key={index}>
                                <div className="project-img-title">
                                    {item.projectName
                                        ? item.projectName
                                        : "photo"}
                                </div>
                                <img
                                    src={item.img}
                                    class="d-block w-100"
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
        <div class="modal fade" id="ProjectModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 className="modal-title">
                            {ProjectData[props.data].project}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body shadow">
                        <div
                            id="projectCarousel"
                            class="carousel slide"
                            data-bs-interval="false"
                        >
                            <div class="carousel-indicators">
                                <Indicators />
                            </div>
                            <div class="carousel-inner">
                                <Slides />
                            </div>
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#projectCarousel"
                                data-bs-slide="prev"
                            >
                                <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#projectCarousel"
                                data-bs-slide="next"
                            >
                                <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
