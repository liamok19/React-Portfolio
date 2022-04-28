import React from "react";
import imgChorestodo from "../images/CHORES.gif";
import imgCryptoMuggles from "../images/project_images/final-look.gif";
import imgWeatherDashboard from "../images/project_images/WeatherDashboard.gif";
import imgPasswordGenerator from "../images/project_images/Password_Generator.gif";
import imgPortfolio from "../images/liamokportfolio.gif"
import imgEmployeeTracker from "../images/project_images/liamoemployeetracker.gif"
//movie images not required for this assignment
// import imageIMDb from "../images/imdbIcon3.png";
// import imageGithub from "../images/github_icon.png";
// import imgWhatIf from "../images/whatif_2021.jpg";
// import imgMTB3 from "../images/project_images/mayathebee3_logo.png";
// import imageWolf from "../images/project_images/100_wolf_film.png";
// import imageWinchester from "../images/project_images/winchester_img.jpg";
// import imageUnderworld from "../images/project_images/Underworld-blood-wars-movie-logo.png";
// import imageUpgrade from "../images/project_images/upgrade_img.jfif";
import ProjectCard from "../containers/portfolio/ProjectCard";

const styles = {
  // iconStyle: {
  //     width: 25,
  //     height: 25
  // },
  // imgstyle:{
  //     width: 150,
  //     height:100,
  //     flex: 1,
  //     // flexDirection: 'column',
  //     display: 'flex',
  //     justifyContent: 'center'
  // },
  color: {
    // color: '#3A7759',
    backgroundColor: "#8CAB9B",
  },
  pageStyle: {
    paddingBottom: 17
  },
};

export default function Portfolio() {
  const projects = [
    {
      title: "Chores to do",
      image: imgChorestodo,
      alt: "Chores to do image",
      link: "https://github.com/liamok19/choresToDo",
      deployedlink: "https://chorestodo.herokuapp.com/",
      desc: " A Full Stack application providing users to assign tasks to their children for a certain reward. Modern version of the family chart board.",
    },
    {
      title: "Crypto Muggles",
      image: imgCryptoMuggles,
      alt: "crypto muggle image",
      link: "https://github.com/liamok19/Crypto-Muggles.git",
      deployedlink: "https://liamok19.github.io/Crypto-Muggles/",
      desc: "Fetch 2 API’s to display the latest statistics and news on the top 5 coins of Cryptocurrency.",
    },
    {
      title: "Weather Dashboard",
      image: imgWeatherDashboard,
      alt: "Weather Dashboard image",
      link: "https://github.com/liamok19/weatherDashboard.git",
      deployedlink: "https://liamok19.github.io/weatherDashboard/",
      desc: "Users can search any city for the current and 5-day future forecast of the weather. Local storage applied for users to review previous searches.",
    },
    {
      title: "Password Generator",
      image: imgPasswordGenerator,
      alt: "Password Generator image",
      link: "https://github.com/liamok19/passwordGeneratorJS",
      deployedlink: "https://liamok19.github.io/passwordGeneratorJS/",
      desc: "Users are prompted with a series of questions as a result of their choice; they're displayed with a generated password.",
    },
    {
      title: "Portfolio",
      image: imgPortfolio,
      alt: "Portfolio image",
      link: "https://github.com/liamok19/liamokane_updated_portfolio.git",
      deployedlink: "https://liamok19.github.io/liamokane_updated_portfolio/",
      desc: "Latest collection of work for my portfolio containing Full stack, back end, front end, VFX and Animation projects that I have created, managed and coordinated on.",
    },
    {
        title: "Employee Tracker",
        image: imgEmployeeTracker,
        alt: "Employee Tracker image",
        link: "https://github.com/liamok19/employeeTracker.git",
        deployedlink: "https://github.com/liamok19/employeeTracker.git",
        desc: "A command-line application builty from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
      },
  ];
  return (
    <div style={styles.color}>
      <div class="container navCtr">
        <div class="row worklist">
          <h3 id="WORK" class="col-sm-6">
            PORTFOLIO
          </h3>
        </div>
      </div>
      <section  id="portfolioSection" class="workBuffer">
        <div class="container">
          <div class="row">
            {projects.map((project) => (
              <div key={project.title} className="col-4">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
