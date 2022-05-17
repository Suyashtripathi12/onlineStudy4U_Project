import React from "react";
import "./Style.css"

function Rating() {
    return (
        <div>
            <section className = "white-section"id = "features" >

                <div className = "container-fluid" >

                    <div className = "row" >
                        <div className = "feature-box col-lg-3" >
                            <i className = "icon fab fa-facebook-f fa-4x" > </i> 
                            <br />
                            <i className = "ratings fa-solid fa-star" ></i>
                            <i className = "ratings fa-solid fa-star" > </i>
                            <i className = "ratings fa-solid fa-star" > </i>
                            <i className = "ratings fa-solid fa-star" > </i>
                            <i className = "ratings fa-solid fa-star" > </i>
                            <h3 className = "feature-title" > Facebook </h3>
                            <p>
                                Our Ratings says it all <br />
                                check us on facebook 
                            </p>

                        </div>

                        <div className = "feature-box col-lg-3" >
                            <i className = "icon fab fa-google fa-4x" > </i>
                            <br />
                            <i className = "ratings fa-solid fa-star" > </i>
                            <i className = "ratings fa-solid fa-star" > </i>
                            <i className = "ratings fa-solid fa-star" > </i>
                            <i className = "ratings fa-solid fa-star" > </i>
                            <i className = "ratings fa-solid fa-star-half" > </i>
                            <h3 className = "feature-title" > Google </h3>
                            <p>
                                Check - out our rating on google this is what you call top - notch
                            </p>

                        </div>

                        <div className = "feature-box col-lg-3" >
                            <i className = "icon fab fa-google-play fa-4x" ></i><br />
                            <i className = "ratings fa-solid fa-star" > </i>
                            <i className = "ratings fa-solid fa-star" > </i>
                            <i className = "ratings fa-solid fa-star" > </i>
                            <i className = "ratings fa-solid fa-star" > </i>
                            <h3 className = "feature-title" > Play Store </h3>
                            <p >
                                Also on the Play Store just download us and you are good to go..
                            </p>

                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Rating