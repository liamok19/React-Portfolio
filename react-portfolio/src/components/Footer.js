//Pseudocode
//import React - DONE
//import styles - DONE
//create variable to hold the style elements required for this component
//create a function with the relevant text for this section. Export feault this functio 
// Inside the function make sure we're returning the styles using {}


import React from 'react'
import '../styles/Footer.css'

const styles = {
    card: {
        background: '#45775E'
    },
}

export default function Footer(){
    return (
        <footer style={styles.card}>
            FOOTER bitches
        </footer>
    )
}