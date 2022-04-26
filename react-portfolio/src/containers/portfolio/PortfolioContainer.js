import React from 'react';
import About from '../../pages/AboutMe';
import Portfolio from '../../pages/Portfolio';
import Contact from '../../pages/Contact';
import Resume from '../../pages/Resume';


export default function PortfolioContainer({currentPage, handlePageChange}) {

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
  
    }
    if (currentPage === 'Portfolio') {
      return<Portfolio />; 
    }
    if (currentPage === 'Contact') {
      return<Contact />;
    }
    return (
      <Resume />
    )
  };


  return (
    <div>
      {renderPage()}
    </div>
  );
}
