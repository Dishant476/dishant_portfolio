import React from "react";
import "./about.css";
import CommonBackground from "../../components/CommonBackground";
import Cubes from "../../components/Cubes";
const About = () => {
  const ResumeData = {
    filePath: require("../about/Resume.pdf"),
    alt: "file not found",
  };

  const aboutBtnFunction = (e) => {
    const aboutBtn = document.getElementById("about-btn");
    return function () {
      aboutBtn.addEventListener("click", () => {
        e.preventDefault();
      });
    };
  };
  return (
    <div className="about-container w-100">
      <CommonBackground />
      <div className="about-inner w-100 h-100p flex-centered">
        <div className="about-contents w-80">
          <div className="about-contents-inner w-100 flex-column-space">
            <div className="about-title w-100 flex-column-start">
              Glance inside me...
            </div>
            <div className="about-description flex-column-start">
              I am a Frontend Developer skilled in a wide range of technologies,
              including React.js, Next.js,Vite.js, HTMl, CSS,JavaScript and
              Bootstrap.
              <div className="download-cv">
                <button
                  className="btn enlarge"
                  onClick={aboutBtnFunction}
                  id="about-btn"
                >
                  <a href={ResumeData.filePath} download>
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
            <div className="development-cubes w-100">
              <Cubes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
