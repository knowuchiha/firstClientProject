import React from "react";

function CorporateLeaders() {
    const LeaderCard = (props) => {
        return (
            <div className="card border-light shadow">
                <img
                    src="./assets/images/leader.jpg"
                    className="card-img-top"
                    alt="CEO"
                />
                <div className="card-body">
                    <h3 className="card-title">{props.name}</h3>
                    <h5 className="card-subtitle mb-2 text-muted">
                        {props.title}
                    </h5>
                    <p className="card-text">About ...</p>
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
    };
    return (
        <>
            <div className="corporate-component">
                <div className="row">
                    <div className="col-12 corporate-title">
                        <div>Corporate Leadership</div>
                    </div>
                </div>
                <div className="row">
                    <div className="leader-cards">
                        <LeaderCard
                            name="jack johnson"
                            title="Founder, Company CEO"
                        />
                        <LeaderCard name="peter pan" title="Co-Founder" />
                        <LeaderCard name="Dylan Hall" title="Co-Founder" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CorporateLeaders;
