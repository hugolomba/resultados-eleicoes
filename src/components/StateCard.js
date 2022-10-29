import React from "react";
import "./StateCard.css";

const StateCard = ({ estado }) => {
  return (
    <div className="card-estado">
      <h3>{estado.cdabr}</h3>
      <h4>Urnas: {estado.pst}%</h4>
      {estado.cand.map((cand) => {
        return (
          <div className="card-estado-resultado">
            <span>{cand.nm}</span>
            <span>{cand.pvap}%</span>
          </div>
        );
      })}
    </div>
  );
};

export default StateCard;
