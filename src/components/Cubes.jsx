import React from "react";
import "./cubes.css";
import "./nth-selectors.css";
const Cubes = () => {
  return (
    <section className="cubes-container flex-even" id="cubes-container">
      <div className="cube">
        <div className="top flex-centered">Frontend</div>
        <div>
          <span className="flex-centered">Frontend</span>
          <span className="flex-centered">Frontend</span>
          <span className="flex-centered">Frontend</span>
          <span className="flex-centered">Frontend</span>
        </div>
      </div>
      <div className="cube backend">
        <div className="top flex-centered">Backend</div>
        <div>
          <span className="flex-centered">Backend</span>
          <span className="flex-centered">Backend</span>
          <span className="flex-centered">Backend</span>
          <span className="flex-centered">Backend</span>
        </div>
      </div>
      <div className="cube mern-stack">
        <div className="top flex-centered">MERN Stack</div>
        <div>
          <span className="flex-centered">MERN Stack</span>
          <span className="flex-centered">MERN Stack</span>
          <span className="flex-centered">MERN Stack</span>
          <span className="flex-centered">MERN Stack</span>
        </div>
      </div>
    </section>
  );
};

export default Cubes;
