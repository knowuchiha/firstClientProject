import React        from "react";
import { NavLink }  from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="selected" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink activeClassName="selected" to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <span className="navbar-brand ml-auto">
                        K.S.S ENGINEERING
                    </span>
                </div>
            </nav>
        </>
    );
}

export default Header;
