import React from "react";
import { DownloadIcon } from "@heroicons/react/outline";
import photo from "../../assets/images/nahid.png";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="intro__section">
      <div className="welcome">
        <h5>Hello I'm</h5>
        <h1>Nahid Hasan</h1>
        <h3>Baby Web Developer</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla alias
          repellendus nostrum provident et labore illo pariatur magnam deleniti
          modi.
        </p>
        <div className="buttons">
          <button>
            <a href="#contact">Hire Me</a>
          </button>
          <button className="download__button">
            <a href="../../../CV.pdf" download="cv.pdf">
              {" "}
              Download CV{" "}
              <DownloadIcon
                style={{ width: "16px", height: "14px", color: "#FCC028" }}
              />
            </a>
          </button>
        </div>
      </div>
      <div className="photo">
        <img src={photo} alt="" />
      </div>
    </div>
  );
}
