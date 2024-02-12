// @ts-nocheck
/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import React from "react";
import "./hero.css";
import developeur from "../../animation/developeur.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform:'scale(0)' }}
            animate={{ transform:'scale(1.1)' }}
            transition={{ damping: 5 ,type:'spring',stiffness:100 }}
            src="./me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Web and mobile developer
        </motion.h1>
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
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(1.5);
          }}
          animationData={developeur}
        />
      </div>
    </section>
  );
};

export default Hero;
