//Pseudocode
//import React - DONE
//import styles - DONE
//create variable to hold the style elements required for this component
//create a function with the relevant text for this section. Export feault this function
// Inside the function make sure we're returning the styles using {}
//integrate the navtab bar so they sit inside this container.

import React, { useState } from "react";
import NavTabs from "./NavTab";
import "../styles/Header.css";

// import Portfolio from './pages/Portfolio';

const styles = {
  headerCard: {
    background: "#8CAB9B",
    fontSize: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 50,
    borderStyle: "none",
    paddingLeft: 70,
    fontFamily:"Helvetica",
  },
};

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      {/* <div className="triangleRight"></div> */}
      <header className="header" style={styles.headerCard} >
        Liam O'Kane
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />

        {/* <Portfolio /> */}
      </header>
    </div>
  );
}
