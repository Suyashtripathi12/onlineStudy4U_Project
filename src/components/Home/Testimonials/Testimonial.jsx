import React, { useState } from "react";
import  "./Style.css"
import Img from "./ImgArray";
import Panel from "./Panel";

function Testimonials(props) {

    const [data, setData] = useState(props.data);

    const onCardClick = (id) => {
        const newState = [...data];
        newState.map((item) => item.id === id ? item.active = true : item.active = false);
        setData(newState);
    }

    return (
        <div>
            <section className= "testimonials" >

                <h1> Get a Glace </h1>
                <p> What actually our ex - students say about us..! </p>

                <div className = "testimonial-container" >
                    {Img.map((panel) => <Panel key={panel.id} data={panel} onCardClick={onCardClick}></Panel>)}
                </div>
            </section>
        </div>
    )
}

export default Testimonials