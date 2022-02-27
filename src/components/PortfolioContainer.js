import React, { useState } from 'react'; 
import Navbar from './Navbar';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Aboutme');
    const renderPage = () => {
        if (currentPage === "Aboutme") {
            return <Aboutme/>;
        } 
        if (currentPage === "Contact") {
            return <Contact/>;
        } 
        if (currentPage === "Portfolio") {
            return <Portfolio/>;
            
        } 
        return <Resume />;
    };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
          {renderPage()}
      </div>
  );
}
