import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from "./containers/portfolio/PortfolioContainer";
import { Canvas } from "@react-three/fiber";
import { Box } from "./components/Box";


function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const [currentColor, setCurrentColor] = useState('orange'); 
 
  const handleColorChange = (event, color) => { 
    event.preventDefault(); 
    setCurrentColor(color); 
  };
  //   useEffect(() => {
  //     console.log("the current page is ", currentPage);
  //   }, [currentPage]);

  //return components with set props for the current page and handlepage update.
  return (
    <>
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      <Canvas style={{ background: "#8CAB9B" }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-5, -5, -5]} />
        <Box currentColor={currentColor} position={[1, 1, 1]} /> 
      </Canvas> 
      <PortfolioContainer
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
      <Footer />
    </>
  );
}
export default App;
