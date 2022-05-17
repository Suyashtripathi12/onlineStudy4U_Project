import React from "react";
import Img from "./ImgArray";
import "./Style.css"

function Slider() {

    // new Glider(document.querySelector('.glider'), {
    //     slidesToShow: 6,
    //     dots: '#dots',
    //     draggable: true,
    //     arrows: {
    //         prev: '.glider-prev',
    //         next: '.glider-next'
    //     },
    //     rewind: true
    // });

    function gliderComponent(props) {
        return (
            <div className = "glider" >
                <a href = "#!"
                    target = "_blank"
                    rel = "noopener noreferrer" >
                    <img src={props.src} alt="company-logo" />
                </a>
            </div>
        )
    }

    return (
        <div>
            <section className = "companies colored-section" >
                <h1 > Get a Glace </h1>
                <p> What actually our ex - students say about us..! </p>
                <div className = "company-container" >
                    <div className = "glider-contain" >
                        <div>
                            <button aria-label = "Previous" className = "glider-prev" > « </button>
                            {Img.map(gliderComponent)}
                            <button aria-label = "Next" className = "glider-next" > » </button>
                        </div>
                        <div role = "tablist" id = "dots"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slider