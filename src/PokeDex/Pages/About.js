import React from "react";
import "../STYLES/CSS/About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-heading">
        <h2 className="heading">PokeDEX</h2>
      </div>
      <div className="about-info">
        Welcome,to my PokeDex App.<br></br> You can search your favourite
        pokemon here and get to know about their details like abilities,pokemon
        type,their strength and weakness. Hope,You Enjoy my Project <br></br>
        <br></br>
        Thanks for using my App 😄
        <p className="info-end">
          Created By- <span className="creater-name">Gaurav Gupta</span>
        </p>
      </div>
    </div>
  );
};

export default About;
