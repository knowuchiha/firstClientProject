import React from "react";

function CorporateLeaders() {
    const LeaderCard = (props) => {
        return (
            <div class="card border-light shadow">
                <img
                    src="./assets/images/leader.jpg"
                    class="card-img-top"
                    alt="CEO"
                />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{props.title}</h6>
                    <p class="card-text">About ...</p>
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
