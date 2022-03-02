import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';



function Header(){
    const [currentPage, setCurrentPage ] = useState('About');

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

return(
    <div>
        <div className = 'header px-5'>
            <h1 className='name'>Bart Gloyd Jr</h1>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
        {renderPage()}
    </div>
);
}

export default Header;