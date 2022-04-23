//Pseudocode
//import React - DONE
//import styles - DONE
//create variable to hold the style elements required for this component
//create a function with the relevant text for this section. Export feault this function 
// Inside the function make sure we're returning the styles using {}
//integrate the navtab bar so they sit inside this container. 


import React from 'react';
import '../styles/Header.css';
import NavTabs from './NavTab';

const styles = {
    card:{
        background: 'cyan'
    },
}



export default function Header() {
    return(
        <div>
            <header
        style ={styles.card}
        className="header">
            Liam O'Kane     
            <NavTabs />
        </header>
        
        </div>
        
    )
}