import React from 'react';
import Navigation from './Navigation'

//handlePageChange and currentPage are being destructured from PortfolioContainer.js
export default function Header({ handlePageChange, currentPage }) {
    const openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
    }

    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
    }

    return (
        <header >
            {/* Display this layout if user was on mobile devices */}
            <div className="sm-device">
                <div id="mySidebar" class="sidebar">
                    <button class="closebtn" onClick={closeNav}>&times;</button>
                    <Navigation handlePageChange={handlePageChange} currentPage={currentPage} />
                    <ul className="personal-links">
                        <li>
                            <a href="https://linkedin.com/in/talee-yang-49293aa5" target="_blank" rel="noreferrer noopener" className="footer-link link-light">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/tyang896" target="_blank" rel="noreferrer noopener" className="footer-link link-light">GitHub</a>
                        </li>
                        <li>
                            <a href="mailto:talee.yng@gmail.com" className="footer-link link-light">talee.yng@gmail.com</a>
                        </li>
                        <li>
                            <a href="tel:+19526889231" className="footer-link link-light">952.688.9231</a>
                        </li>
                    </ul>
                </div>
                <div className="p-2 text-center row">
                    <div className="d-inline text-start col">
                        <button className="openbtn" onClick={openNav}>&#9776;</button>
                    </div>
                    <div className="col-8">
                        <h2 className="text-light text-end me-3 pt-2" onClick={() => handlePageChange('About')}>Talee Yang</h2>
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

