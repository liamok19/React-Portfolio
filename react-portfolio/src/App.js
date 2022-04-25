import React, { useEffect, useState } from "react";
import Header from "./components/Header";
// import Section from './components/Section';
import Footer from "./components/Footer";
// import NavTab from './components/NavTab';
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

//   useEffect(() => {
//     console.log("the current page is ", currentPage);
//   }, [currentPage]);


  return (
    <>
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      {/* <NavTab /> */}
      <PortfolioContainer
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
      {/* <Section /> */}
      <Footer />
    </>
  );
}
export default App;
