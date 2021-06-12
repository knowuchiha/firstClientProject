import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HomeData } from "../shared/HomeData";

function Header() {
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => {
        window.scroll(0, 0);
    };

    function Dropdown() {
        return HomeData.images.map((item) => {
            return (
                <a key={item.title} href={`${item.link}`}>
                    {item.title}
                </a>
            );
        });
    }

    function dropdownClick() {
        setDropdown((prev) => !prev);
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand navbar-dark">
                <div className="">
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
                                <div
                                    className={
                                        dropdown
                                            ? "smalldrop dropdown"
                                            : "dropdown"
                                    }
                                    onClick={dropdownClick}
                                >
                                    services
                                    <div className="dropdown-content">
                                        <Dropdown />
                                    </div>
                                </div>
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
