import React from 'react';
import imageLinkedin from '../../images/linkedin_icon.png';
import imageGithub from '../../images/github_icon.png';
import imageEmail from '../../images/email_icon.png';
import imageResume from '../../images/filesresume_icon.png';


const styles = {
  imgStyle: {
    width: 100,
    height: 100
  },
}

export default function Contact() {
  return (
    <div className="title_contact">
      <div id="CONTACT" className="contactrow">
          <div className="col-md-3 contactBuffer"></div>
          <div className="col-2">
              <h4>CONTACT</h4>
          </div>
          <div className="col-1 social-anchor">
              <a  href="http://www.linkedin.com/in/liam-o-kane-b91517b7/">
                  <img style={styles.imgStyle} src={imageLinkedin}alt="linkedin-icon"/>
              </a>
          </div>
          <div className="col-1 social-anchor">
                    <a href="https://github.com/liamok19">
                        <img style={styles.imgStyle}  src={imageGithub} alt="github-icon" />
                    </a>
                </div>
                <div className="col-1 social-anchor">
                    <a href="mailto:liamokane19@gmail.com">
                        <img  style={styles.imgStyle}  src={imageEmail} alt="email-icon" />
                    </a>
                </div>
                <div className="col-1 social-anchor">
                    <a  href="./assets/resume/Liam O'Kane CV 23.03.2022.docx.pdf"download>
                        <img style={styles.imgStyle} src={imageResume} alt="files-icon" />
                    </a>
                </div>
            <div className="col-md-3 contactBuffer"></div>
      </div>
    </div>
  );
}
