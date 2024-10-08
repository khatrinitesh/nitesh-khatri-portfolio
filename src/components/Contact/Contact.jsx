import React from "react";
import { ContactWrapper, Email } from "./ContactElements";
import FixSocialIcon from "../SocialIcon/FixSocialIcon";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span>nitesh.khatri88@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:nitesh.khatri88@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
        <FixSocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;