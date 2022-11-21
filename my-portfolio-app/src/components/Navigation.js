import React, { useState } from 'react';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation() {
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

    const renderNavLinks = (currentPage) => {
        return (
            <ul className='nav-tabs'>
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        )
    }

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            {renderNavLinks(currentPage)}
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}

export default Navigation;