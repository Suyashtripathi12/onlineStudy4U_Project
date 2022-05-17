import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import img from "../../img/logo.png"

import "./Style.css"

function About() {
    return (
        <div>
            <Header />
                <section class="about-page">
                    <div class="about-landing">
                        <h1>Welcome to OnlineStudy4U</h1>
                        <img src={img} alt="logo" />

                        <div class="container-fluid about-para">

                            <p>
                                OnlineStudy4u- A Complete Placement Solution, is one stop solution for all kind of placement exam conducted in
                                India.
                                Onlinestudy4u is the only platform in India to provide "MOCK TEST VIDEO SOLUTION" for all kind of placement
                                Examination
                                conducted by Top MNC's eg: TCS, Infosys, Wipro, Capgemini etc.
                            </p>
                            <p>
                                OnlineStudy4U has the best and experienced mentors who has more than 10years of Experience in IT industry. Pratik
                                Shrivastava the founder of OnlineStudy4U itself has more than 10years of IT industry experience and he loves to
                                teache
                                Aptitude and Reasoning and guides students to acheive their dreams.
                            </p>
                            <p>
                                If you are a job Seeker, seeking for the right career guidance, "OnlineStudy4U" is the place of your search .
                                OnlineStudy4U Provides Placement assitance, Live classes, recorded classes, Doubt clearing sessions and Offline
                                training
                                in reupted Engineering colleges.Founded in 2018 by an Engineer and produced 10,000+.
                            </p>
                            <p>
                                Engineers in two Year Span of time.Start your preparation with the premium Courses offered by OnlineStudy4U and
                                ensure
                                your selection in TOP MNC's. Our Premium courses are very much affordable and Prepared by the IT experts. The
                                Quality of
                                the content can be measure by the free videos available on Youtube.
                            </p>

                        </div>

                        <hr class="about-hr" />

                    </div>
                </section>
            <Footer />
        </div>
    )
}

export default About