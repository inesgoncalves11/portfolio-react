import React from "react";
import './about.css';
function About() {
    return (

        <div>
            <div className="container__about">
                <div className="about__image">
                    <img src="https://www.lynnefinnigan.com/main-asset.svg" alt="about me" />
                </div>
                <div className="about__section">
                    <h2> About me</h2>
                    <p>My name is Inês de Abreu Pinto Gonçalves. I've been passionate about multimedia since i was a kid.
                        I graduated in Comunication and Multimedia in 2019 and started working full time as an administrative and client support.
                        I've always been passionate about web and design so in 2022 i decided to keep trying and learn more about development.
                        I started a course in March 2022 for Front end development and since then I've been working on learning more each day and praticing new projects.
                    </p>
                </div>
            </div>
            <div className="skills">
                <ul>
                    <li> HTML</li>
                    <li> CSS</li>
                    <li> SASS</li>
                    <li> BOOTSTRAP</li>
                    <li> JAVASCRIPT</li>
                    <li> ANGULAR </li>
                    <li> REACT</li>
                </ul>
               
            </div>




        </div>
    );
}
export default About;