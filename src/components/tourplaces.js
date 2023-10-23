import React, { useState } from "react";
import "./tourplaces.css";
import { sgpArr,bali,taipei,tokyo,bangkok } from "./placesData.js";

export const Tourplaces = () => {
  const [placeSelected, setplaceSelected] = useState("");
  const [placeData, setplaceData] = useState([]);

  return (
    <div className="tour-places">
      <div className="places-to-visit">
        <h1>
          {placeSelected === ""
            ? "Places around you"
            : `Popular things to do in ${placeSelected}`}
        </h1>
        <div className="button-list">
          <button
            onClick={() => {
              setplaceSelected("Singapore");
              setplaceData(sgpArr);
            }}
          >
            Singapore
          </button>
          <button
            onClick={() => {
              setplaceSelected("Bali");
              setplaceData(bali);
            }}
          >
            Bali
          </button>
          <button
            onClick={() => {
              setplaceSelected("Taipei");
              setplaceData(taipei);
            }}
          >
            Taipei
          </button>
          <button
            onClick={() => {
              setplaceSelected("Tokyo");
              setplaceData(tokyo);
            }}
          >
            Tokyo
          </button>
          <button
            onClick={() => {
              setplaceSelected("Bangkok");
              setplaceData(bangkok);
            }}
          >
            Bangkok
          </button>
        </div>

        <div className="tourPlacesLists">
          {placeData.map((tourPlaces) => (
            <a href={tourPlaces.link}>
              <div className="tourPlacesCards">
                <img src={tourPlaces.image} alt="Card Images" />
                <div className="tourPlacesText">
                  <div className="tourTopText">
                    <p>{tourPlaces.title}</p>
                    <small>Available today</small>
                  </div>
                  <div className="tourBtmText">
                    <small>From</small>
                    <div className="tourPlacesPrice">
                      <p>INR {tourPlaces.price}</p>
                      <p>⭐4.8</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
          <a
            href="https://www.pelago.co/en-IN/city/singapore-activities/"
            className="tourPlacesBtn"
          >
            View all activities
          </a>
        </div>
      </div>
    </div>
  );
};
