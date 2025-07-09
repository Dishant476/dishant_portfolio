import React from "react";
import "./home.css";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container h-100p w-100">
      <Hero />
      <div className="home-inner h-100p w-100">
        <div className="home-contents h-100p w-100 flex-centered">
          <div className="home-contents-inner h-50p w-50 flex-column-start">
            <span>Hi I'm Dishant</span>
            <h1>Frontend web developer </h1>
            <button className="btn">
              <Link to="/about">Explore More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
