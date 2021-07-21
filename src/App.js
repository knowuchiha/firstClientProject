import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// DATA
import { HomeData } from "./shared/HomeData";

// Components
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import Footer from "./components/FooterComponent";
import ArchitectureComponent from "./components/ArchitectureComponent";
import StructureComponent from "./components/StructureComponent";
import PipingComponent from "./components/PipingComponent";
import ElectricalComponent from "./components/ElectricalComponent";
import TenderingComponent from "./components/TenderingComponent";
import TopographicalComponent from "./components/TopographicalComponent";

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
                <Route
                    exact
                    path={`${HomeData.images[0].link}`}
                    component={ArchitectureComponent}
                />
                <Route
                    exact
                    path={`${HomeData.images[1].link}`}
                    component={StructureComponent}
                />
                <Route
                    exact
                    path={`${HomeData.images[2].link}`}
                    component={PipingComponent}
                />
                <Route
                    exact
                    path={`${HomeData.images[3].link}`}
                    component={ElectricalComponent}
                />
                <Route
                    exact
                    path={`${HomeData.images[4].link}`}
                    component={TenderingComponent}
                />
                <Route
                    exact
                    path={`${HomeData.images[5].link}`}
                    component={TopographicalComponent}
                />

                <Redirect to="/home"></Redirect>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
