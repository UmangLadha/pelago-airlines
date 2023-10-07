import React from "react";
import cardImg from "./img/Suggestion-img.png";
import "./suggestion.css";

export const Suggestion = () => {
  return (
    <>


      <div className="Suggestion-card">
      <h1>Recommended for you</h1>
        <div className="cards">
          <img src={cardImg} alt="Card Images" />
          <div className="cardText">
            <div className="topText">
              <p>Heritage Transport Museum</p>
              <div>Available today</div>
            </div>
            <div className="btmText">
              <small>From</small>
              <div className="price">
                <p>INR 405</p>
                <p>⭐4.0</p>
              </div>
            </div>
          </div>
        </div>


		<div className="offerCard">
			<div className="offerText">
			<h2>Enjoy 10% off* on your first booking with PELAGOWELCOME10</h2>
			<p>*T&Cs apply</p>
			</div>
			<button>COPY CODE</button>
		</div>
      </div>
    </>
  );
};
