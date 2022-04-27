import React from "react";
import imageResumepage1 from "../images/resume/LiamOKaneCV_Page_1.png";
import imageResumepage2 from "../images/resume/LiamOKaneCV_Page_2.png";
import resumeIcon from "../images/filesresume_icon.png";

const styles = {
  iconStyle: {
    width: 30,
    height: 25,
  },
  color: {
    // color: '#3A7759',
    backgroundColor: "#8CAB9B",
  },
  pdfStyle: {
    width: 450,
    height: 600,
  },
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconHeading: {
      fontSize: 20, 
      alignItems: "center"
  },
  iconSize: {
      width: 20, 
      height: 20
  }
};

export default function Resume() {
  return (
    <div style={styles.color}>
      <h1> Resume </h1>
      <h2 style={styles.iconHeading}> Downloadable version here</h2>
      <a href="./assets/resume/Liam O'Kane CV 23.03.2022.docx.pdf" download>
        <img style={styles.iconSize} src={resumeIcon} alt="files-icon" />
      </a>
      <div style={styles.containerStyle}>
        <img style={styles.pdfStyle} src={imageResumepage1} alt="Resume1" />
        <img style={styles.pdfStyle} src={imageResumepage2} alt="Resume2" />
      </div>
    
    </div>
  );
}
