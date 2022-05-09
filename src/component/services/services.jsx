import React, { useContext } from "react";
import "./services.css";
import Card from "../card/Card";
import fish from "../../img/fish.PNG";
import green from "../../img/green.PNG";
import robot from "../../img/robot.PNG";
import { themeContext } from "../../context";
import { motion } from "framer-motion";


const Services = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Mes Premiers</span>
        <span>Projets</span>
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "30rem" }}
          whileInView={{ left: "40rem" }}
          transition={transition}
        >
          <Card
          detail="https://mohamedbel-ymam.github.io/green-office/"
            emoji= {green}
            heading={<a className="link" href="https://mohamedbel-ymam.github.io/green-office/">Green office</a>}
            
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "0rem", top: "12rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
        >
          <Card
            detail="https://mohamedbel-ymam.github.io/Fish-chips/"
            emoji={fish}
            heading={<a  className="link" href="https://mohamedbel-ymam.github.io/Fish-chips/">Fish & chips</a> }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "40rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
        >
          <Card
          detail="https://mohamedbel-ymam.github.io/Robott/"
            emoji={robot}
            heading={<a className="link" href="https://mohamedbel-ymam.github.io/Robott/">Robot</a>}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
    
  );
};

export default Services;