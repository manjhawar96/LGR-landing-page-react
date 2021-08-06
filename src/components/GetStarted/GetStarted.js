import React from "react";
import "./GetStarted.css";
import getStarted from "../../assets/getStarted.png";

export default function GetStarted() {
  return (
    <section id="getStarted">
      <img src={getStarted} alt="none" className="startedImg" />
      <div className="container">
        <div className="allText">
          <h1 className="title">
            Collaborate with anyone you want, however you want.
          </h1>
          <p className="info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            delectus quia incidunt quae fugiat expedita?
          </p>
          <button className="getStartedBtn">
            <strong>Get Started</strong> - It's free
          </button>
        </div>
      </div>
    </section>
  );
}
