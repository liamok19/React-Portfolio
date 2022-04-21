import React from 'react';
import '../styles/Section.css';

const styles = {
    card:{
        background: 'orange',
    },
}

export default function Section(){
    return(
        <div style={styles.card}>
            <h2>Header Title</h2>
            <p>
                Tis is filler text for a portfolio amount of work YEEHAW
            </p>
        </div>
    )
}