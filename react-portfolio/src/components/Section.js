import React from 'react';
import '../styles/Section.css';
import PortFolioContainer from './PortfolioContainer'

const styles = {
    card:{
        background: 'orange',
    },
}

export default function Section(props){
    return(
        <div style={styles.card}>
            <h2><PortFolioContainer props={props.currentPage}/></h2>
            <p>
                Tis is filler text for a portfolio amount of work YEEHAW
            </p>
        </div>
    )
}