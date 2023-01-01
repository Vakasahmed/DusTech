import React,{useState } from "react";
import dustech from "../Images/dustech.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState("none");
  const display = () => {
  if(toggle === "none"){
    setToggle("block");
  }
  else{
    setToggle("none");
  }
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="left-header flex">
          <img className="icon" src={dustech} alt="icon" />
          <h2>DusTech</h2>
        </div>
      </Link>
      <div className="bar" onClick={() => display()}>
        <div className="bar1"></div>
        <div className="bar1"></div>
        <div className="bar1"></div>
      </div>

  <div className="right-header update flex">
        <Link to="/about">About</Link>
        <Link to="/service">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/career">Careers</Link>
      </div>
      <div className="right-header flex" style={{display:toggle}}>
        <Link to="/about">About</Link>
        <Link to="/service">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/career">Careers</Link>
      </div>
    </div>
  );
}

export default Header;
