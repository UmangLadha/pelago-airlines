import React from "react";
import bgImg from "./img/background img.png";
import "./header.css";

export const Header = () => {
  const promoDetails = [
    {
      promoTitle: "Connect to culture",
      promoDesc: "Explore iconic attractions and hidden gems",
    },
    {
      promoTitle: "Service that soars",
      promoDesc: "We are a Singapore Airlines company",
    },
    {
      promoTitle: "Earn KrisFlyer rewards",
      promoDesc: "Earn or redeem miles on every booking",
    },
  ];
  return (
    <>
      <div>
        <img className="bgImg" src={bgImg} alt="Background Images" />
        <div className="hero-heading">
          <h1>Travel that shapes you</h1>
          <p>Book activities, tours and experiences</p>
          <input type="text" placeholder="Search for tours" />
        </div>

        <div className="promotion">
          {promoDetails.map((promo) => (
            <div className="promo">
              <div>{promo.promoTitle}</div>
              <p>{promo.promoDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
