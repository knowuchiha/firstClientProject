import React from "react";
import Fade from "react-reveal/Fade";

export default function ServiceCard(props) {
    return (
        <>
            <Fade left delay={200} duration={1500}>
                <div className="card border-light shadow">
                    <div className="card-body">
                        <h5 className="card-subtitle mb-2 text-muted">
                            {props.title}
                        </h5>
                        <p className="card-text">
                            About the kind of service we provide
                        </p>
                    </div>
                </div>
            </Fade>
        </>
    );
}
