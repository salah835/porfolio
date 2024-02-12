/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="./me.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Web and mobile developer</h1>
        <p className="sub-title">
          I'm salah mbarki web and mobile developer based in Nabeul Tunisia ,
          I'm Professional, motivated,ambitious and creative, I am always
          committed to my work and able to work in different environments
        </p>
        <div className=" all-icon flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation border">animation</div>
    </section>
  );
};

export default Hero;
