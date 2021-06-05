import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Redirect to="/home"></Redirect>
            </Switch>
        </>
    );
}

export default App;
