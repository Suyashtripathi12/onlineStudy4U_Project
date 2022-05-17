import React from "react";

function Panel(props) {

    const { id, src, heading, active } = props.data;

    return (
        <div 
            className = {`panel ${active && "active"}`} 
            style = {{backgroundImage: `url(${src}`}} 
            onClick = {() => props.onCardClick(id)} >

            <h3 >{heading}</h3>

        </div>
    )
}

export default Panel