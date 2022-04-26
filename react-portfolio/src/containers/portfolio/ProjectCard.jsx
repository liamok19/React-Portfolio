import React from "react";
import imageGithub from "../../images/github_icon.png";
import imageBrowser from "../../images/brower.png";

// css in js

// styled compnents

export default function ProjectCard(props) {
  const styles = {
    iconStyle: {
      width: 30,
      height: 25,
    },
    imgstyle: {
      width: 150,
      height: 100,
      flex: 1,
      // flexDirection: 'column',
      display: "flex",
      justifyContent: "center",
    },
    cardStyle: {
      borderStyle: "groove",
      marginBottom: 30,
      alignItems: "center",
    },
  };

  return (
    <div style={styles.cardStyle} className="card">
      <div className="imgBx">
        <img style={styles.imgstyle} src={props.image} alt={props.alt} />
        <h4>
          <strong>{props.title}</strong>
        </h4>
        <span>
          <a href={props.link}>
            <img style={styles.iconStyle} src={imageGithub} alt="github-icon" />
          </a>
          <a href={props.deployedlink}>
            <img
              style={styles.iconStyle}
              src={imageBrowser}
              alt="browsericon"
            />
          </a>
        </span>
      </div>
      <div className="content">
        <div className="github"></div>
        <div className="logline">
          <span> {props.desc}</span>
        </div>
      </div>
    </div>
  );
}
