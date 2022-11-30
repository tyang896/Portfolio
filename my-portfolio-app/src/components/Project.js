//IMPORT REACT
import React from 'react'
//CREATE A PROJECT COMPONENT THAT WILL TAKE IN MULTIPLE PROPERTIES: NAME OF PROJECT, IMAGE SOURCE FILE, CODING PROGRAMS
export default function Project({title, image, link, programs, altDesc}) {
    return (
        <figure>
            <a href={link}>
            <img src={image} alt={altDesc} className="application"></img>
            </a>
            <h2>{title}<br /><span className="programs">{programs}</span></h2>
        </figure>
    )
}
//RETURN A DIV CONTAINING A CLICKABLE BOX LINK THAT WILL TAKE USERS TO THE PROJECT