import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header() {

    return (
        <div>
            <section className="colored-section landing" id="title">

                <div className="container-fluid Header">

                    {/* Nav Bar */}

                    <nav className="navbar navbar-expand-lg navbar-dark">

                        <Link to="/" className="navbar-brand">OnlineStudy4U</Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                            <ul className="navbar-nav ml-auto">
                                <li className="header nav-item" >
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="header nav-item" >
                                    <Link className="nav-link" to="/job">Jobs</Link>
                                </li>
                                <li className="header nav-item" >
                                    <Link className="nav-link" to="/mockTest">Free Mock Test</Link>
                                </li>
                                <li className="header nav-item" >
                                    <Link className="nav-link" to="/preparation">Preparation</Link>
                                </li>
                                <li className="header nav-item" >
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>

            </section>
        </div>
    )

}

export default Header