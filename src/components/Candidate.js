import React from "react";
import { Paper } from "@mui/material";
import lula from "../img/l.png";
import bolsonaro from "../img/b.png";

const Candidate = ({ candidate }) => {
  return (
    <Paper elevation={5}>
      <div className="candidate-card">
        <img src={candidate.nm === "LULA" ? lula : bolsonaro} />

        <div className="candidate-info">
          <h2>
            {candidate.nm} <span>{candidate.n}</span> -
            <span>{candidate.cc.slice(0, 3)}</span>
          </h2>

          <p className="candidate-percentage">{candidate.pvap}%</p>
          <span>{candidate.vap} votos</span>
        </div>
      </div>
    </Paper>
  );
};

export default Candidate;