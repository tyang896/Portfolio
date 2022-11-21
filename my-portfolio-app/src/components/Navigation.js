import React, {useState} from 'react';
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
      if (currentPage === 'Portfolio'){
        return <Portfolio />;
      }
      return <Resume />;
      
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
        <div>
          {/* We are passing the currentPage from state and the function to update it */}
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}
          {renderPage()}
        </div>
      );
}

export default Navigation;