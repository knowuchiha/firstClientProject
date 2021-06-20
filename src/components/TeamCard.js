import React from "react";
import $ from "jquery";

export default function TeamCard(props) {
    function flipCard(e, id) {
        id = "." + id;
        let card = $(id);
        let target = $(e.target);
        if (target.hasClass("flipCard")) {
            card.toggleClass("flip");
        }
    }

    return (
        <div
            className={`flipper ${props.id}`}
            onClick={(e) => flipCard(e, props.id)}
        >
            <div class="card border-light shadow">
                <div class="front">
                    <div class="card-up">
                        <img
                            class="card-img-top"
                            src={
                                props.background
                                    ? props.background
                                    : "https://mdbootstrap.com/img/Photos/Others/photo7.jpg"
                            }
                            alt=" with a  of clouds."
                        />
                    </div>
                    <div className="avatar">
                        <img
                            src={
                                props.image
                                    ? props.image
                                    : "/assets/images/avatar1.jpg"
                            }
                            alt="avatar"
                        />
                    </div>
                    <div className="front-text">
                        <h4>{props.name}</h4>
                        <h6>{props.title}</h6>
                    </div>
                    <div className=" bottom flipCard">
                        read more{" "}
                        <i
                            class="fa fa-chevron-right flipCard"
                            aria-hidden="true"
                        ></i>
                        <i
                            class="fa fa-chevron-right flipCard"
                            aria-hidden="true"
                        ></i>
                    </div>
                </div>
                <div class="back">
                    <div className="back-title">About me</div>
                    <div className="back-text">Brief about the person</div>
                    <div className="links">
                        <a
                            href="http://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                            <i
                                class="fa fa-facebook"
                                aria-hidden="true"
                            ></i>{" "}
                        </a>
                        <a
                            href="http://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                            <i
                                class="fa fa-twitter"
                                aria-hidden="true"
                            ></i>{" "}
                        </a>
                        <a
                            href="http://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                            <i
                                class="fa fa-linkedin"
                                aria-hidden="true"
                            ></i>{" "}
                        </a>
                    </div>
                    <div class="goback">
                        <div className="flipCard">
                            <i class="fa fa-undo flipCard"></i> rotate back
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="card border-light shadow">
        //     <img
        //         src="./assets/images/member.jpg"
        //         className="card-img-top"
        //         alt="CEO"
        //     />
        //     <div className="card-body">
        //         <h3 className="card-title">{props.name}</h3>
        //         <h5 className="card-subtitle mb-2 text-muted">{props.title}</h5>
        //         <div className="links">
        //             <a
        //                 className="card-link"
        //                 href="https://www.instagram.com/"
        //                 target="_blank"
        //                 rel="noreferrer"
        //             >
        //                 <i className="fa fa-instagram"></i>
        //             </a>
        //             <a
        //                 className="card-link"
        //                 href="https://www.facebook.com/"
        //                 target="_blank"
        //                 rel="noreferrer"
        //             >
        //                 <i className="fa fa-facebook"></i>
        //             </a>
        //             <a
        //                 className="card-link"
        //                 href="https://www.linkedin.com/"
        //                 target="_blank"
        //                 rel="noreferrer"
        //             >
        //                 <i className="fa fa-linkedin"></i>
        //             </a>
        //         </div>
        //     </div>
        // </div>
    );
}
