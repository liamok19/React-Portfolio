import React from 'react';
import image from '../images/liamo_headshot_01.JPG'

const styles = {
  card1:{
    fontSize: 15,
  },
  card2:{
    fontSize: 13,
  },
  imgStyle: {
    width: 450,
    height: 300
  },
  containerStyle: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    // color: '#3A7759',
    backgroundColor: '#8CAB9B',
    paddingRight: 75,
    paddingLeft: 75
    }, 
}


export default function About() {
  return (
    <div style={styles.containerStyle}>
      <img style={styles.imgStyle} src={image} alt="headshot" />
      <h1>Bio</h1>
      <p style={styles.card1}>
        Aloha, I'm Liam, Li, Leeham and my list of nicknames continues to grow. I worked in Visual FX and Animation for over 8 years and have a wealth of experience managing productions involving Artists, Directors, Admin, Production, and Marketing team members. Web Development is a skill I would like to expand.
      </p> 
      <p style={styles.card2}>A fabulous thing about me is that I have traded dancing on stage for dancing in the kitchen. Despite the fact that it has no relevance to programming, it contributes to the upbeat nature I bring to the working environment.</p>
          </div>
  );
}