import React from 'react';
import Navigation from './Navigation'

export default function Header(){
    return (
        <div className='header'>
            <h1 className='title-name p-3'>
                Talee Yang
            </h1>
            <Navigation className='nav'/>
        </div>
    )
}

