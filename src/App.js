import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import Footer from "./components/FooterComponent";

// CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "./App.css";

// JS

import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/home" component={Home} />
                <Redirect to="/home"></Redirect>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
