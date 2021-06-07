import React from "react";
import { NavLink } from "react-router-dom";
import { HomeData } from "../shared/HomeData";

function Header() {
    const handleClick = () => {
        window.scroll(0, 0);
    };

    function Dropdown() {
        return HomeData.images.map((item) => {
            return <a href="/">{item.title}</a>;
        });
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#myNav"
                        aria-controls="myNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item grow">
                                <NavLink
                                    activeClassName="selected"
                                    to="/home"
                                    onClick={handleClick}
                                >
                                    KSS Engineering
                                </NavLink>
                            </li>

                            <li className="nav-item dropbtn">
                                <a
                                    href="#services"
                                    activeClassName="selected"
                                    className="dropdown"
                                >
                                    services
                                    <div className="dropdown-content">
                                        <Dropdown />
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item grow">
                                <a href="#corporateLeaders">about</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
