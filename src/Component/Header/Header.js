import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h3 className="title">Nahid</h3>
      <nav>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
      <button>
        <a href="#contact">Hire Me</a>
      </button>
    </div>
  );
}
