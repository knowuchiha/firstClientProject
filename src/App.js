import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Footer from "./components/FooterComponent";
import Contact from "./components/ContactComponent";
import TeamBuilding from "./components/EventsComponent";

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
                <Route exact path="/about" component={About} />
                <Route exact path="/events" component={TeamBuilding} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/home"></Redirect>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
