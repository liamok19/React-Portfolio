import React from 'react';
import '../styles/Section.css';

const styles = {
    card:{
        backgroun: 'lavender',
    },
}

export default function Section(){
    return(
        <section style={styles.card}>
            <h2>Header Title</h2>
            <p>
                Tis is filler text for a portfolio amount of work YEEHAW
            </p>
        </section>
    )
}