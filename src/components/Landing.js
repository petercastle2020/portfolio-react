import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <svg
        xmlns="http://www.w3.org/200/svg"
        version="1.1"
        className="wave-svg"
        transform="rotate(180)"
      >
        <path
          d="
        M0 67,
        C 373, 283 
          1022, -140
          1920, 306
        V 600
        H 0
        V 67  
        Z"
        >
          <animate
            repeatCount="indefinite"
            attributeName="d"
            dur="45s"
            attributeType="XML"
            values="
          M0 77
          C 573, 383
          922, -206
          2600, 316
  
          V0 600
          H0 0
          V0 300
          Z;
  
          M0 77
          C 573, 60
            1322, 37
            2600, 336
  
          V0 600
          H0 0
          V0 300
          Z;
  
          M0 77
          C 1073, 360
            1822, -193
            2600, 320
  
          V0 600
          H0 0
          V0 300
          Z;
  
          M0 77
          C 573, 383
            922, -180
            2600, 316
  
          V0 600
          H0 0
          V0 300
          Z
        "
          ></animate>
        </path>
      </svg>
      <section className="hero-section">
        <h1>
          V<span className="light-text">&</span>P
        </h1>
        <p>
          a <span className="pro-span">pro</span>grammer.
        </p>
      </section>
    </div>
  );
};

export default Landing;
