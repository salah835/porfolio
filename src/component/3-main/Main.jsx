import React from "react";
import "./main.css";
const Main = () => {
  return (
    <main className="flex ">
      <section className=" flex  left-section">
        <button className="active">all projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node é Express</button>
      </section>
      <section className=" flex right-section ">
        {["aa", "bb", "cc",1,7].map((item) => {
          return (
            <article key={item} className="carde ">
              <img width={260} src="./1.jpg" alt="" />
              <div style={{ width: "260" }} className="box ">
                <h1 className="title"> landing page </h1>
                <p className="subtitle">tache of the projects</p>
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
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
