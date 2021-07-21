import React from "react";
import { HomeData } from "../shared/HomeData";
import { Link } from "react-router-dom";
import SocialMedia from "../shared/SocialMedia";

function Footer() {
    const handleEmail = () => {
        const url = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${SocialMedia.email}`;
        const mobileUrl = `mailto:${SocialMedia.email}`;
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            window.open(mobileUrl, "_blank");
        } else {
            window.open(url, "_blank");
        }
    };

    const Services = () => {
        return (
            <ul>
                {HomeData.images.map((item, index) => {
                    if (index === 2 || index === 4) {
                        return (
                            <li key={item.title}>
                                <div
                                    className="disabled"
                                    to={`${item.link}`}
                                    target="_blank"
                                >
                                    {item.title}
                                </div>
                            </li>
                        );
                    }
                    return (
                        <li key={item.title}>
                            <Link to={`${item.link}`} target="_blank">
                                {item.title}
                            </Link>
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
                        <div className="footer-services">
                            <div className="service-footer">SERVICES</div>
                            <Services />
                        </div>
                        <div className="connect-footer">
                            <div className="connect-footer-title">
                                CONNECT WITH US
                            </div>
                            <div className="social-fonts">
                                <a
                                    href={SocialMedia.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                    href={SocialMedia.facebook}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-facebook"></i>
                                </a>

                                <Link onClick={handleEmail}>
                                    <i className="fa fa-envelope"></i>
                                </Link>
                            </div>
                            <div className="footer-services">
                                <ul>
                                    <li>
                                        <Link onClick={handleEmail}>
                                            Contact Us
                                        </Link>
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
                        <div className="col-12 copyright">
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
