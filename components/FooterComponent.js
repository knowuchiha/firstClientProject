import React from "react";
import { HomeData } from "../shared/HomeData";
import Link from "next/link";

function Footer() {
    const Services = () => {
        return (
            <ul>
                {HomeData.images.map((item) => {
                    return (
                        <li key={item.title}>
                            <Link href={`${item.link}`} passHref>
                                <a>{item.title}</a>
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
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="mailto:kssengineering@gmail.com"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="/" passHref>
                                            <a>Privacy Notice</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" passHref>
                                            <a>Disclaimer</a>
                                        </Link>
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
