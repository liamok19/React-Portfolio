import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from "./containers/portfolio/PortfolioContainer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

//   useEffect(() => {
//     console.log("the current page is ", currentPage);
//   }, [currentPage]);

//return components with set props for the current page and handlepage update.
  return (
    <>
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      <PortfolioContainer
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
      <Footer />
    </>
  );
}
export default App;
