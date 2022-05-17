import React from "react";
import "./Style.css"
import img from "../../img/onlinestudy4u.png"
import Rating from "./Ratings/Rating";
import HexCounter from "./HexCounter/HexCounter";
import Img from "./Testimonials/ImgArray";
// import Slider from "./Glider/Glider.jsx";
import Testimonials from "./Testimonials/Testimonial";
import Footer from "../Footer/Footer";

function Home() {
    return (
        <div>
            <section className="colored-section landing" id="title" >

                <div className="container-fluid" >

                    {/* Nav Bar */}

                    <nav className="navbar navbar-expand-lg navbar-dark" >

                        <a className="navbar-brand" href="#!" > OnlineStudy4U </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" >
                            <span className="navbar-toggler-icon" > </span> </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02" >

                            <ul className="navbar-nav ml-auto" >
                                <li className="nav-item" >
                                    <a className="nav-link" href="/about" > About Us </a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link" href="#Jobs" > Jobs </a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link" href="#courses" > Free Mock - Test </a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link" href="#preparation" > Preparation </a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link" href="/contact" > Contact Us </a>
                                </li>
                            </ul>

                        </div>
                    </nav>

                    {/* !--Title-- > */}

                    <div className="row" >

                        <div className="col-lg-6" >

                            <h1 className="big-heading" > Want to get job in top IT Companies ? </h1>
                            <h3>India 's best Courses for placement preparation! </h3>
                            <button type="button" className="btn btn-dark btn-lg download-button" > <i className="fab fa-google" > </i> Get it on web</button >
                            <button type="button" className="btn btn-outline-light btn-lg download-button" > <i className="fab fa-google-play" > </i>Download </button>
                        </div>

                        <div className="col-lg-6" >
                            <img className="title-image" src={img} alt="iphone-mockup" style={{ width: "100%", position: "absolute", top: "-5%" }} />
                        </div>

                    </div>

                </div>

            </section>

            <Rating />
            <HexCounter />
            {/* <Slider /> */}
            <Testimonials data={Img} />
            <Footer />

        </div>
    )
}

export default Home;