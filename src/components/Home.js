import React            from "react";
import { HomeData }     from "../shared/HomeData";

function Home() {
    function Topics() {
        return (
            <div className="topic-grid">
                {HomeData.images.map((topic) => {
                    return (
                        <div key={topic.title} className="topic-block">
                            <div className="image-thumbnail">
                                <img src={topic.img} alt={topic.title} />
                                <div className="topic-title">
                                    <div>{topic.title}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12"></div>
                </div>
            </div>
            <Topics />
        </>
    );
}

export default Home;
