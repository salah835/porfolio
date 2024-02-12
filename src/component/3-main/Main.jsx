import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import "./main.css";
import { myprojects } from "./mypojects";

const Main = () => {
  const [curentactive, setcurentactive] = useState("all");
  const [arr, setarr] = useState(myprojects);
  const handclick = (buttoncat) => {
    setcurentactive(buttoncat);

    const newarray = myprojects.filter((item) => {
      const zzz = item.category.find((myitem) => {
        return myitem === buttoncat;
      });

      return zzz === buttoncat;
    });

    setarr(newarray);
  };
  return (
    <main className="flex ">
      <section className=" flex  left-section">
        <button
          onClick={() => {
            setcurentactive("all");
            setarr(myprojects);
          }}
          className={curentactive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handclick("css");
          }}
          className={curentactive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handclick("react");
          }}
          className={curentactive === "react" ? "active" : null}
        >
          react
        </button>
        <button
          onClick={() => {
            handclick("bootstrap");
          }}
          className={curentactive === "bootstrap" ? "active" : null}
        >
          bootstrap
        </button>

        {/* <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node é Express</button> */}
      </section>
      <section className=" flex right-section ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 100 }}
                key={item.imagpath}
                className="carde "
              >
                <img width={260} src={item.imagpath} alt="" />
                <div style={{ width: "260" }} className="box ">
                  <h1 className="title"> {item.projecttitle} </h1>
                  <p className="subtitle">
                    Une page À propos de nous comporte quatre éléments
                    
                    principaux : 1. Partager l’histoire de la création de
                    l’entreprise C’est l’occasion de vous concentrer sur le
                  </p>
                  <div className="flex icons ">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a className="link flex " href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow_forward"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
