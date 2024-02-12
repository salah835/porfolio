import { useState } from "react";
import "./header.css";
const Header = () => {
  const [showmodal,setshowmodal] = useState(false);
  return (
    <header className="flex">
      <button className="menu icon-menu flex " onClick={()=>{
         setshowmodal(true)
         }}></button>
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

      <button className="mode flex" >
        <span className="icon-moon-o"></span>
      </button>

      {showmodal && (
        <div className=" fixed ">
          <ul className="modal">
            <li>
              <button className="icon-close" onClick={()=>{
                setshowmodal(false)
              }}></button>
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
