import React from 'react';
import '../styles/Header.css';

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
        </header>
        </div>
        
    )
}