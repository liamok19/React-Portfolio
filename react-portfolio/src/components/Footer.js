//Pseudocode
//import React - DONE
//import styles - DONE
//create variable to hold the style elements required for this component
//create a function with the relevant text for this section. Export feault this functio
// Inside the function make sure we're returning the styles using {}

import React from "react";
import "../styles/Footer.css";
import imageLinkedin from "../images/linkedin_icon.png";
import imageGithub from "../images/github_icon.png";
import imageEmail from "../images/email_icon.png";
import imageTwitter from "../images/twitter_icon.png";

const styles = {
  card: {
    background: "#45775E",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 0,
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
};

export default function Footer() {
  return (
    <footer style={styles.card}>
      <div className="col-4 contactBuffer"></div>
      <div style={styles.card} className="col-1 social-anchor">
        <a href="http://www.linkedin.com/in/liam-o-kane-b91517b7/">
          <img
            style={styles.imgStyle}
            src={imageLinkedin}
            alt="linkedin-icon"
          />
        </a>
      </div>
      <div style={styles.card} className="col-1 social-anchor">
        <a href="https://github.com/liamok19">
          <img style={styles.imgStyle} src={imageGithub} alt="github-icon" />
        </a>
      </div>
      <div style={styles.card} className="col-1 social-anchor">
        <a href="mailto:liamokane19@gmail.com">
          <img style={styles.imgStyle} src={imageEmail} alt="email-icon" />
        </a>
      </div>
      <div style={styles.card} className="col-1 social-anchor">
        <a href="https://twitter.com/ok_leeham" download>
          <img style={styles.imgStyle} src={imageTwitter} alt="email-icon" />
        </a>
      </div>
      <div className="col-4 contactBuffer"></div>
    </footer>
  );
}
