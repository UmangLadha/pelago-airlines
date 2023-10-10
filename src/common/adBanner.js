import React from "react";
import "./adBanner.css";
import bannerIcon from "./img/offer_icon.png";

export const Adbanner = () => {
  return (
    <>
      <div className="offerCard">
		<img src={bannerIcon} alt="banner" style={{width:"110px"}}/>
        <div className="offerText">
          <p>Enjoy 10% off* on your first booking with PELAGOWELCOME10</p>
          <a href="https://pages.pelago.co/en/promotions">*T&Cs apply</a>
        </div>
        <button>COPY CODE</button>
      </div>
    </>
  );
};
