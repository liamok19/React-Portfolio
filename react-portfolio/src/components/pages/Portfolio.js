import React from 'react';
import imageIMDb from '../../images/imdbIcon3.png';
import imageGithub from '../../images/github_icon.png';
import imgChorestodo from '../../images/CHORES.gif';
import imgCryptoMuggles from '../../images/project_images/final-look.gif';
import imgWeatherDashboard from '../../images/project_images/WeatherDashboard.gif';
import imgPasswordGenerator from '../../images/project_images/Password_Generator.gif';
import imgWhatIf from '../../images/whatif_2021.jpg';
import imgMTB3 from '../../images/project_images/mayathebee3_logo.png';

const styles = {
    iconStyle: {
        width: 25,
        height: 25
    },
    imgstyle:{
        width: 150, 
        height:100,
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center'
    },
}

export default function Portfolio(){
    return (
        <div>
            <div class="container navCtr">
                <div class="row worklist">
                    <h3 id="WORK" class="col-sm-6">PORTFOLIO</h3>

                </div>
            </div> 
            <section id="portfolioSection" class="workBuffer">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div class="card ">
                            <div class="imgBx">                     
                                <img style={styles.imgstyle} src={imgChorestodo} alt="groupproject2" />
                                <h4>
                                    <strong>Chores To Do</strong>
                                </h4>
                                    <span>
                                        <a href="https://github.com/liamok19/choresToDo">
                                            <img style={styles.iconStyle} src={imageGithub} alt="github-icon"/>
                                        </a>  
                                    </span>
                            </div>
                            <div class="content">
                                <div class="github"></div>
                                <div class="logline">
                                        <span> A Full Stack application providing users to assign tasks to their children for a certain reward. Modern version of the family chart board.</span>
                                </div>
                            </div>
                        </div>            
                    </div>
                    <div class="col-4">
                        <div class="card ">
                            <div class="imgBx">                     
                                <img style={styles.imgstyle} src={imgCryptoMuggles} alt="groupproject1_gif" />
                                <h4>
                                    <strong>Crypto Muggles</strong>
                                </h4>
                                    <span>
                                        <a href="https://github.com/liamok19/Crypto-Muggles.git">
                                            <img style={styles.iconStyle} src={imageGithub} alt="github-icon"/>
                                        </a>  
                                    </span>
                            </div>
                            <div class="content">
                                <div class="github"></div>
                                <div class="logline">
                                        <span> Fetch 2 API’s to display the latest statistics and news on the top 5 coins of Cryptocurrency.</span>
                                </div>
                            </div>
                        </div>            
                    </div>
                    <div class="col-4">
                        <div class="card ">
                            <div class="imgBx">                     
                                <img style={styles.imgstyle} src={imgWeatherDashboard} alt="weather_gif" />
                                <h4>
                                    <strong>Weather Dashboard</strong>
                                </h4>
                                <span>
                                    <a href="https://github.com/liamok19/weatherDashboard.git">
                                        <img style={styles.iconStyle} src={imageGithub} alt="github-icon"/>
                                    </a>  
                                </span>
                            </div>
                            <div class="content">
                                <div class="github"></div>
                                <div class="logline">
                                        <span> Users can search any city for the current and 5-day future forecast of the weather. Local storage applied for users to review previous searches.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card ">
                            <div class="imgBx">                     
                                <img style={styles.imgstyle} src={imgPasswordGenerator} alt="password-gif" />
                                <h4>
                                    <strong>Password Generator</strong>
                                </h4>
                                <span>
                                    <a href="https://github.com/liamok19/passwordGeneratorJS">
                                        <img style={styles.iconStyle} src={imageGithub} alt="github-icon"/>
                                    </a>  
                                </span>
                            </div>
                            <div class="content">
                                <div class="github"></div>
                                <div class="logline">
                                        <span> Users are prompted with a series of questions as a result of their choice; they're displayed with a generated password.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card ">
                            <div class="imgBx">                     
                                <img style={styles.imgstyle} src={imgWhatIf} alt="whatif.img" />
                                <h4>
                                    <strong>What If...?</strong>
                                </h4>
                                <span>
                                    <a href="https://www.imdb.com/title/tt10168312/">
                                        <img style={styles.iconStyle} src={imageIMDb} alt="imdb-icon"/>
                                    </a>  
                                </span>
                            </div>
                            <div class="content">
                                <div class="imdb"></div>
                                <div class="logline">
                                        <span> 2D/3D FX, Lighting and Compositing Coordinator. Backend Delivery. Marketing Coordinator</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card ">
                            <div class="imgBx">                     
                                <img style={styles.imgstyle} src={imgMTB3} alt="mtb3_logo" />
                                <h4 id="mtb3_font">
                                    <strong>Maya the Bee 3 The Golden Orb</strong>
                                </h4>
                                <span>
                                    <a href="https://www.imdb.com/title/tt11792512/?ref_=nv_sr_srsg_0">
                                        <img style={styles.iconStyle} src={imageIMDb} alt="imdb-icon"/>
                                    </a>  
                                </span>
                            </div>
                            <div class="content">
                                <div class="imdb"></div>
                                <div class="logline">
                                        <span> Animation Coordinator and Marketing Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card ">
                            <div class="imgBx">                     
                                <img id="anim_projectLink2" class="anim_projects" onclick="myFunction()" src="./assets/images/project_images/100_wolf_film.png" alt="wolf_logo" />
                                <h4>
                                    <strong>100% Wolf</strong>
                                </h4>
                                <span>
                                    <a href="https://www.imdb.com/title/tt8774798/?ref_=fn_al_tt_1">
                                        <img style={styles.iconStyle} src={imageIMDb} alt="imdb-icon"/>
                                    </a>  
                                </span>
                            </div>
                            <div class="content">
                                <div class="imdb"></div>
                                <div class="logline">
                                        <span> Layout Coordinator and Marketing Coordinator</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card ">
                            <div class="imgBx">                     
                                <img id="vfx_projectLink0" class="vfx_projects" onclick="myFunction()" src="./assets/images/project_images/winchester_img.jpg" alt="winchester_logo" />
                                <h4>
                                    <strong>Winchester</strong>
                                </h4>
                                <span>
                                    <a href="https://www.imdb.com/title/tt1072748/?ref_=nv_sr_srsg_3">
                                        <img style={styles.iconStyle} src={imageIMDb} alt="imdb-icon"/>
                                    </a>  
                                </span>
                            </div>
                            <div class="content">
                                <div class="imdb"></div>
                                <div class="logline">
                                        <span> VFX Coordinator (Lighting, FX and Compositing. Backend Delivery)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card ">
                            <div class="imgBx">                     
                                <img id="vfx_projectLink1" class="vfx_projects" onclick="myFunction()" src="./assets/images/project_images/Underworld-blood-wars-movie-logo.png" alt="underworld_logo" />
                                <h4>
                                    <strong>Underworld Blood Wars</strong>
                                </h4>
                                <span>
                                    <a href="https://www.imdb.com/title/tt3717252/?ref_=fn_al_tt_1">
                                        <img style={styles.iconStyle} src={imageIMDb} alt="imdb-icon"/>
                                    </a>  
                                </span>
                            </div>
                            <div class="content">
                                <div class="imdb"></div>
                                <div class="logline">
                                        <span> VFX Coordinator</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card ">
                            <div class="imgBx">                     
                                <img id="vfx_projectLink2" class="vfx_projects" onclick="myFunction()" src="./assets/images/project_images/upgrade_img.jfif" alt="upgrade_logo" />
                                <h4>
                                    <strong>Upgrade</strong>
                                </h4>
                                <span>
                                    <a href="https://www.imdb.com/title/tt6499752/?ref_=fn_al_tt_1">
                                        <img style={styles.iconStyle} src={imageIMDb} alt="imdb-icon"/>
                                    </a>  
                                </span>
                            </div>
                            <div class="content">
                                <div class="imdb"></div>
                                <div class="logline">
                                        <span> VFX Coordinator</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            </section>
        </div>
    );
}