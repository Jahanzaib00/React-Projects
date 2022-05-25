import React from "react";
import Navbar from "./Navbar";
import { BiRegistered } from "react-icons/bi";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div>
      <div class="homepage-wrapper">
        <img className="bg-img" src="splashpg_v1.jpg" alt="Snow" />
        <div class="top-left">
          <h1>
            OVERWATCH
            <span className="registered-icon">
              <BiRegistered />
            </span>
          </h1>
          <h4>5th Generation</h4>
          <button className="btn">Learn More</button>
        </div>
        <div class="bottom-right">
          <h4>...a new era in autonomous warfare</h4>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
