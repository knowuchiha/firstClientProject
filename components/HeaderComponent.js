import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HomeData } from "../shared/HomeData";

function Header() {
    const [dropdown, setDropdown] = useState(false);
    const [navLinkColor, setNavlinkcolor] = useState("white");
    const [navbarColor, setNavbarColor] = useState("rgba(0, 0, 0, 0)");
    const [textShadow, setTextshadow] =
        useState(`2px 2px 5px rgba(0, 0, 0, 0.7),
                        -2px -2px 4px rgba(0, 0, 0, 0.7)`);
    const [boxShadow, setBoxShadow] = useState("none");
    const [height, setHeight] = useState(0);
    const [Yposition, setYposition] = useState(0);

    function Dropdown() {
        return HomeData.images.map((item, index) => {
            return (
                <Link key={index} href={`${item.link}`}>
                    {item.title}
                </Link>
            );
        });
    }

    function dropdownClick() {
        setDropdown((prev) => !prev);
    }

    const handleScroll = () => {
        setHeight(window.innerHeight);
        setYposition(scrollY);

        if (Yposition > 20) {
            setBoxShadow("0px 4px 20px rgba(0, 0, 0, 0.5)");
            setTextshadow("none");
            setNavbarColor(
                "linear-gradient(to right,whitesmoke,rgba(255,255,255,1))"
            );
            return setNavlinkcolor("#33312f");
        } else {
            setBoxShadow("none");
            setTextshadow(`2px 2px 5px rgba(0, 0, 0, 0.7),
                        -2px -2px 4px rgba(0, 0, 0, 0.7)`);
            setNavbarColor("rgba(0, 0, 0, 0)");
            return setNavlinkcolor("white");
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand navbar-dark ">
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
                                    <div className="dropName">Services</div>
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
            <style jsx>{`
                nav {
                    box-shadow: ${boxShadow};
                }
                .navbar-dark {
                    background-image: ${navbarColor};
                }
                .grow a {
                    color: ${navLinkColor};
                    text-shadow: ${textShadow};
                }
                .dropbtn .dropName {
                    color: ${navLinkColor};
                    text-shadow: ${textShadow};
                }
            `}</style>
        </div>
    );
}

export default Header;
