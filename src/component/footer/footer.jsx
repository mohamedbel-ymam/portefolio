import React from "react";
import "./footer.css";
import Wavee from "../../img/wavee.PNG";
import Instagram  from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wavee} alt="" style={{ width: "100%", marginTop:"6rem",height:"60vh" }} />
      <div className="f-content">
        <span>mohamed.belymam07@gmail.com</span>
        <div className="f-icons">
         <a href="https://www.instagram.com/belymamsimo/" target="_blank"><Instagram color="white" size={"3rem"} /></a> 
          <a href="https://www.linkedin.com/in/mohamed-bel-ymam-67950a16a/" target="_blank"><LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://github.com/mohamedbel-ymam" target="_blank"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;