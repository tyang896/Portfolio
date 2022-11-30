import React from 'react';
import Navigation from './Navigation'

export default function Header({handlePageChange, currentPage}){
    return (
        <header>
            <h1 className='title-name p-3'>
                Talee Yang
            </h1>
            <Navigation handlePageChange={handlePageChange} currentPage={currentPage}/>
        </header>
    )
}

