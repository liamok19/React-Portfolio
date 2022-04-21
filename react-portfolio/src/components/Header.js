import React from 'react';
import '../styles/Header.css';

const styles = {
    card:{
        background: 'cyan'
    },
}

export default function Header() {
    return(
        <header
        style ={styles.card}
        className="header">
            Liam O'Kane
        </header>
    )
}