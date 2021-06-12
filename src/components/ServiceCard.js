import React from "react";

export default function ServiceCard(props) {
    return (
        <div className="card border-light shadow">
            <div className="card-body">
                <h5 className="card-subtitle mb-2 text-muted">{props.title}</h5>
                <p className="card-text">
                    About the kind of service we provide
                </p>
            </div>
        </div>
    );
}
