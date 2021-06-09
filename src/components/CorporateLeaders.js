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
                                <div className="name">Jack Johnson</div>
                                <div className="designation">
                                    Founder,Company CEO
                                </div>
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
                                <div className="name">Peter Pan</div>
                                <div className="designation">Co-Founder</div>
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
