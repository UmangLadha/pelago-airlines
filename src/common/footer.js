import React from "react";
import "./footer.css";
import logo from "./img/pelago x sia logo.png";
import { BiLogoTiktok } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <div className="footerContent">
          <img src={logo} alt="" />
          <div className="footerNavLinks">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Destination
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              INR
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              English
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Virtual Assistant
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Help Center
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              About us
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Career
            </a>
          </div>
        </div>
        <hr />
        <div className="footerLinks">
          <p>
            © 2023 Encounters Pte. Ltd. All rights reserved. Travel agent
            license: TA03351
          </p>
          <ul className="links">
            <li>
              <a href="/#" target="_blank">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/#" target="_blank">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="/#" target="_blank">
                Terms of Use
              </a>
            </li>
          </ul>
          <div className="socialMediaDiv">
            <BiLogoTiktok />
            <BsFacebook />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
        </div>
      </footer>
    </div>
  );
};
