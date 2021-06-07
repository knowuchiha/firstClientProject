import React from "react";

function CorporateLeaders() {
    return (
        <>
            <div className="corporate-component">
                <div className="row">
                    <div className="col-12">
                        <h1>Corporate Leadership</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10">
                        <div className="leader">
                            <div className="leader-img">
                                <img
                                    src="./assets/images/leader.jpg"
                                    alt="leader"
                                />
                            </div>
                            <div className="leader-info">
                                <h1>Jack Johnson</h1>
                                <h4>Founder,Company CEO</h4>
                                <p>About CEO ...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <div className="leader">
                            <div className="leader-img">
                                <img
                                    src="./assets/images/leader.jpg"
                                    alt="leader"
                                />
                            </div>
                            <div className="leader-info">
                                <h1>Peter Pan</h1>
                                <h4>Co-Founder</h4>
                                <p>About...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CorporateLeaders;
