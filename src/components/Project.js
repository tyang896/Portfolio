import React from 'react'

//Destructures items from Portfolio.js 
export default function Project({title, image, link, programs, altDesc}) {
    return (
        <figure>
            <a href={link} target="_blank" rel="noreferrer noopener">
            <img src={image} alt={altDesc} className="application"></img>
            </a>
            <h2>{title}<br /><span className="programs">{programs}</span></h2>
        </figure>
    )
}
//RETURN A DIV CONTAINING A CLICKABLE BOX LINK THAT WILL TAKE USERS TO THE PROJECT