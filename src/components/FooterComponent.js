import React from "react";
import { HomeData } from "../shared/HomeData";
import { Link } from "react-router-dom";

function Footer() {
    const Services = () => {
        return (
            <ul>
                {HomeData.images.map((item) => {
                    return (
                        <li key={item.title}>
                            <Link to="/">{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-2 col-6 footer-services">
                            <div className="service-footer">SERVICES</div>
                            <Services />
                        </div>
                        <div className="col-md-4  col-6">
                            <div className="connect-footer">
                                CONNECT WITH US
                            </div>
                            <div className="social-fonts">
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                                <a
                                    href="https://www.twitter.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a
                                    href="mailto:kssengineering@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-envelope"></i>
                                </a>
                            </div>
                            <div className="footer-services">
                                <ul>
                                    <li>
                                        <Link to="/">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Privacy Notice</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Disclaimer</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 offset-md-2 offset-1 copyright">
                            Copyright <span>&#169;</span> KSS Engineering.All
                            Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
