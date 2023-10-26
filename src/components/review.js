import React from "react";
import { comments } from "./placesDatas";
import "./review.css";
import { Adbanner } from "../common";

export const Review = () => {
  return (
	<div className="reviewContainer">
    <div className="reviewHolder">
      <h1>Whats travllers say</h1>
      <div className="reviewList">
        {comments.map((cmtArr) => (
          <div className="reviewCard">
            <div className="reviewTopText">
              <span>⭐⭐⭐⭐⭐</span>
              <p>{cmtArr.message}</p>
            </div>
            <div className="reviewBtmText">
              <span>Lay Tin Gillian.Group of Friends</span>
              <p>{cmtArr.visit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
	<Adbanner/>
	</div>
  );
};
