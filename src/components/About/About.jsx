import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            Hello! My name is <strong>Nitesh Khatri</strong> 
            <br/>
            I have over 10+ years of experience as a Front-End Developer, with an additional 3+ years specializing in ReactJS development.

As an accomplished front-end developer, I have extensive experience with HTML, CSS, SCSS, JavaScript, ES6, DOM manipulation, jQuery, TypeScript, React, NextJS, and API integration. I am proficient in various web scripting technologies, web standards, and project management. CSS framework expertise includes TailwindCSS and Bootstrap. I offer a diverse range of services, including custom theme, application, and plugin development. I am an enthusiastic web professional motivated by challenging projects and deadlines.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;