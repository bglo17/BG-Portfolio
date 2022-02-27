import React, { useState } from 'react'; 
import Navbar from './Navbar';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
  

export default function Home() {
  const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home/>;
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
