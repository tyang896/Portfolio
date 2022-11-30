import React from 'react';
import Navigation from './Navigation'

//handlePageChange and currentPage are being destructured from PortfolioContainer.js
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

