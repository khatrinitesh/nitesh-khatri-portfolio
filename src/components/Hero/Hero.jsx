import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from './../Header/Header';
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";


function Hero() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <main>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <HeroContainer>
          <HeroWrapper>
            <HeroLeft>
              <h1>Hi, I'm NITESH KHATRI</h1>
              <h5>Frontend ReactJS Developer</h5>
              <p>
                I design and code beautifully simple things, and I love what I do.
              </p>
            </HeroLeft>
            <HeroRight>
              <Image
                src="https://d2gjqh9j26unp0.cloudfront.net/profilepic/50c1ca72b9f44ce7e3698290658c2a3e"
                alt="man-svgrepo"
              />
            </HeroRight>
          </HeroWrapper>
          <ScrollDown to="projects">
            <ScrollLink>
              Scroll down
              <img
                src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
                alt="scroll-down"
              />
            </ScrollLink>
          </ScrollDown>
        </HeroContainer>
      </main>
    );
  }
  
  export default Hero;