import React from "react";
import contLogo from "../Images/work.jpg";

function Contact() {
  return (
    <div className="contact">
      <img className="contLogo" src={contLogo} alt="location" />
      <h1>
        Email:
        <a href="mailto: sarosh.nadeem.ss@gmail.com">
          sarosh.nadeem.ss@gmail.com
        </a>
      </h1>
      <h1>Mobile NO: +91 9767640403</h1>
    </div>
  );
}

export default Contact;
