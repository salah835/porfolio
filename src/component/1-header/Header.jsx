import { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [showmodal, setshowmodal] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentmode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        className="menu icon-menu flex "
        onClick={() => {
          setshowmodal(true);
        }}
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Article</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // send value to ls
          localStorage.setItem(
            "currentmode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from ls
          settheme(localStorage.getItem("currentmode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showmodal && (
        <div className=" fixed ">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowmodal(false);
                }}
              ></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Article</a>
            </li>
            <li>
              <a href="">Projectes</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
