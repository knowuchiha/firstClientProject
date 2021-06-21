import React, { useState } from "react";
import Link from "next/link";
import { HomeData } from "../shared/HomeData";

function Header() {
    const [dropdown, setDropdown] = useState(false);

    function Dropdown() {
        return HomeData.images.map((item) => {
            return (
                <Link key={item.title} href={`${item.link}`}>
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
                                <Link href="/" passHref>
                                    <a className="selected">KSS Engineering</a>
                                </Link>
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
                                    Services
                                    <div className="dropdown-content">
                                        <Dropdown />
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item grow">
                                <Link href="/#corporateLeaders" passHref>
                                    <a>About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
