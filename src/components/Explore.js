import React from "react";
import "./explore.css";
import { exploreArr } from "./placesDatas.js";

export const Explore = () => {
  return (
    <div className="explore-contanier">
      <h1>Explore our destinations</h1>
      <div className="exploreLists">
        {exploreArr.map((expArr) => (
		<div className="cardHolder"> 
          <div className="exploreCards">
            <img src={expArr.img} alt="Destinations Images" />
          </div>
		  <h3>{expArr.title}</h3>
		</div>
        ))}
      </div>
	  <div className="btnDiv">
		<a href="/" className="exploreBtn">View all activities</a>
	  </div>
    </div>
  );
};
