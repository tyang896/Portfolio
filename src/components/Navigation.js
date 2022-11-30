import React from 'react';

// Destructure currentPage and handlePageChange from Header component
function Navigation({ currentPage, handlePageChange }) {
    //function that shows which page is currently active
    const renderNavLinks = (currentPage) => {
        return (
            <ul className='nav-tabs'>
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        // check if the current page is "Home" if true, set current page to 'nav-link-active', otherwise set it to 'nav-link'
                        className={currentPage === 'About' ? 'nav-link active p-2' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active p-2' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active p-2' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active p-2' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        )


    }

    return (
        <nav>
            {/* Pass the method here to render the navigation tabs and which one is currently active*/}
            {renderNavLinks(currentPage)}
        </nav>
    );
}

export default Navigation;