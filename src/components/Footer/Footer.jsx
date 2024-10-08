import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
    background: #3986fa;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`

function Footer(){
    return(
        <>
         <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" "}
          <a
            href="https://github.com/khatrinitesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @khatrinitesh
          </a>{" "}
        </span>
      </div>
    </FooterSection>
        </>
    )
}

export default Footer;