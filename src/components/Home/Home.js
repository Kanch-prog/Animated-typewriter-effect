import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  const [state] = useState({
    title: "Hi",
    titleTwo: "I'm",
    titleThree: "Easter Bunny",
    image: "././images/bunny.png"
  });
  return (
    <div className="home">
      <div className="home-intro">
        <h2>
          <div className="title">{state.title}</div>
          <div className="titleTwo">{state.titleTwo}</div>
          <div className="titleThree">{state.titleThree}</div>
        </h2>
        <div className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "I'm a Bugs Bunny.",
                "I'm a Roger Rabbit.",
                "I'm a Peter Rabbit."
              ]
            }}
          />
        </div>
        <div className="contact-me">
          <button className="button">Contact Me</button>
        </div>
      </div>
      <div className="home-image">
        <img className="bunny-image" src={state.image} alt="bunny" />
      </div>
    </div>
  );
};
export default Home;
