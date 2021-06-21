import React from "react";
import TeamCard from "./TeamCard";

function CorporateLeaders() {
    return (
        <>
            <div className="corporate-component">
                <div className="row">
                    <div className="col-12 corporate-title">
                        <div>Corporate Leadership</div>
                    </div>
                </div>
                <div className="row">
                    <div className="core-team-cards">
                        <TeamCard
                            name="jack johnson"
                            title="Founder, Company CEO"
                            id="jack"
                        />
                        <TeamCard
                            name="peter pan"
                            title="co-founder"
                            id="laura"
                        />
                        <TeamCard
                            name="dylan hall"
                            title="co-founder"
                            id="carl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CorporateLeaders;
