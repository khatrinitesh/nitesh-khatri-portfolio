import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
    return (
      <div className="Container">
        <Nav>
          <Logo to="/">
            <img
              src="https://seeklogo.com/images/N/nk-logo-C7DFB504D9-seeklogo.com.png"
              alt="logo"
            />
          </Logo>
          <NavMenu>
            <NavLink className="menu-item" to="projects" smooth={true}>
              Projects
            </NavLink>
            <NavLink className="menu-item" to="about" smooth={true}>
              About
            </NavLink>
            <NavLink className="menu-item" to="contact" smooth={true}>
              Contact
            </NavLink>
          </NavMenu>
          <NavBtn>
            <a download
              className="btn PrimaryBtn"
              href="../../../public/html_tutorial.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </NavBtn>
          <Bars onClick={toggle} />
        </Nav>
      </div>
    );
  };
  
  export default Header;