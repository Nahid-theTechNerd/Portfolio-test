import React from "react";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import "./Top.css";

export default function Top() {
  return (
    <div className="top">
      <Header />
      <Intro />
    </div>
  );
}
