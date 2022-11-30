import React, { useState } from 'react';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Header from './Header';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}