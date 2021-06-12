import React from "react";

export default function TeamCard(props) {
    return (
        <div className="card border-light shadow">
            <img
                src="./assets/images/member.jpg"
                className="card-img-top"
                alt="CEO"
            />
            <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                <h5 className="card-subtitle mb-2 text-muted">{props.title}</h5>
                <div className="links">
                    <a
                        className="card-link"
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a
                        className="card-link"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a
                        className="card-link"
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
