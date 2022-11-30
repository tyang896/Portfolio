import React, { useState } from 'react';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Header from './Header';
import Footer from './Footer';

export default function PortfolioContainer() {
    //Set the page to the About page when the user first loads the website.
    const [currentPage, setCurrentPage] = useState('About');
    // renders the page based off of the currentPage value
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Resume />;

    };

    //Function to set the current page
    const handlePageChange = (page) => setCurrentPage(page);

    //Pass in handlePageChange and currentPage into Header component so it's avaliable for the Navigation component
    return (
        <div>
            <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}