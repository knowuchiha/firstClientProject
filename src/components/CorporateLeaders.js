import React from "react";
import TeamCard from "./TeamCard";
import { PeopleData } from "../shared/HomeData";

const style = { opacity: 0, cursor: "default" };

function CorporateLeaders() {
    const [width, setWidth] = React.useState("");
    const [menu, setMenu] = React.useState("");
    const [right, setRight] = React.useState(false);
    React.useEffect(() => {
        const x = document.getElementById("scroll-menu");
        setMenu(x);
        setWidth(x.scrollWidth);
    }, []);

    function ScrollRight() {
        console.log(`Right ${width} ............`);
        menu.scroll(width, 0);
        setRight(true);
    }
    function ScrollLeft() {
        console.log(`Left ............`);
        menu.scroll(0, 0);
        setRight(false);
    }
    return (
        <>
            <div className="corporate-component">
                <div className="row">
                    <div className="col-12 corporate-title">
                        <div>Corporate Leadership</div>
                    </div>
                </div>
                <div className="horizontal-scroll-menu">
                    <div
                        className="next"
                        onClick={ScrollLeft}
                        style={right ? null : style}
                    >
                        <span className="fa fa-angle-left"></span>
                    </div>
                    <div id="scroll-menu" className="core-team-cards">
                        <div className="people-menu">
                            {PeopleData.map((item, index) => {
                                const id = item.name.split(" ")[0];
                                return (
                                    <TeamCard
                                        key={index}
                                        name={item.name}
                                        designation={item.designation}
                                        desc={item.description}
                                        id={id}
                                        facebook={item.facebook}
                                        linkedin={item.linkedin}
                                        image={item.img}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className="next"
                        onClick={ScrollRight}
                        style={right ? style : null}
                    >
                        <span className="fa fa-angle-right"></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CorporateLeaders;
