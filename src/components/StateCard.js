import React from "react";
import "./StateCard.css";
import { Paper } from "@mui/material";

const StateCard = ({ estado }) => {
  return (
    <div className="card-estado">
      <h3>{estado.cdabr}</h3>
      <h4>Urnas: {estado.pst}%</h4>
      {estado.cand &&
        estado.cand.map((cand) => {
          return (
            <div className="card-estado-resultado" key={cand.n}>
              <span>{cand.nm.length > 4 ? cand.nm.slice(0, -8) : cand.nm}</span>
              <span>{cand.pvap}%</span>
            </div>
          );
        })}
    </div>
  );
};

export default StateCard;
