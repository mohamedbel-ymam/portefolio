import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card"> 
    <span>{heading}</span>
      <a className="ca" href={detail} target="_blank"><img src={emoji} alt="" /></a> 
      
    </div>
  );
};

export default Card;