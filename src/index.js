import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";



// Components
import App from "./App";

function Main() {
    return (
        <BrowserRouter>
            <div>
                <App />
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<Main />, document.getElementById("root"));
