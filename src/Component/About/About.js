import React from "react";
import nahid from "../../assets/images/nahid2.png";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { BriefcaseIcon } from "@heroicons/react/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import "./About.css";

export default function About() {
  return (
    <div id="about">
      <div className="photo">
        <img src={nahid} alt="nahid" />
      </div>
      <div className="description">
        <h5>A BIT</h5>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint
          aperiam non consectetur illum recusandae quos magnam fuga rerum ab?
        </p>
        <div className="cards">
          <div className="card card1">
            <BadgeCheckIcon
              style={{ height: "40px", width: "40px" }}
            ></BadgeCheckIcon>
            <div>
              <h5>1 Year+</h5>
              <h4>Experience</h4>
            </div>
          </div>
          <div className="card card2">
            <BriefcaseIcon
              style={{ height: "40px", width: "40px" }}
            ></BriefcaseIcon>
            <div>
              <h5>10+</h5>
              <h4>Project</h4>
            </div>
          </div>
          <div className="card card2">
            <QuestionMarkCircleIcon
              style={{ height: "40px", width: "40px" }}
            ></QuestionMarkCircleIcon>
            <div>
              <h5>24/7</h5>
              <h4>Help </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
