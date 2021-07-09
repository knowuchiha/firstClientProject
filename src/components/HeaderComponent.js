import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HomeData } from "../shared/HomeData";

function Header() {
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => {
        window.scroll(0, 0);
    };

    function Dropdown() {
        return HomeData.images.map((item, index) => {
            if (index === 2 || index === 4) {
                return (
                    <div key={index} className="disabled-title">
                        {item.title}
                    </div>
                );
            }
            return (
                <Link key={item.title} to={`${item.link}`} target="_blank">
                    {item.title}
                </Link>
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
                                    className="selected"
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
                                    <div className="dropName">Services</div>
                                    <div className="dropdown-content">
                                        <Dropdown />
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item grow">
                                <a href="/home#corporateLeaders">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
