import React from 'react';
import Navigation from './Navigation'

//handlePageChange and currentPage are being destructured from PortfolioContainer.js
export default function Header({ handlePageChange, currentPage }) {
    return (
        <header >
            {/* Display this layout if user was on mobile devices */}
            <div className="sm-device">
                <div className="p-2 text-center row">
                    <div className="d-inline text-start col">
                        <button className="openbtn" onclick="">&#9776;</button>
                    </div>
                    <div className="col-10">
                        <h2 className="text-light text-end me-3">Talee Yang</h2>
                    </div>
                </div>
            </div>
            {/* Display this layout if user is on a tablet or laptop */}
            <div className="lg-device">
                <h1 className='title-name p-3'>
                    Talee Yang
                </h1>
                <Navigation handlePageChange={handlePageChange} currentPage={currentPage} />
            </div>
        </header>
    )
}

