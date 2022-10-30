import React from "react";
import "./StateCard.css";
import { Paper } from "@mui/material";
import { useState } from "react";

const StateCard = ({ estado }) => {
  let lula, bolsonaro;

  return (
    <Paper elevation={4}>
      {estado.cand &&
        estado.cand.map((cand) => {
          if (cand.nm === "LULA") lula = cand.pvap;
          if (cand.nm === "JAIR BOLSONARO") bolsonaro = cand.pvap;
        })}

      <div
        className={`
          ${lula > bolsonaro ? "lulawin card-estado" : "card-estado"}
          ${bolsonaro > lula ? "bolsonarowin card-estado" : "card-estado"} `}
      >
        {console.log(lula)}
        <h3>{estado.cdabr}</h3>
        <h4>Urnas: {estado.pst}%</h4>
        {estado.cand &&
          estado.cand.map((cand) => {
            if (cand.nm === "LULA" || cand.nm === "JAIR BOLSONARO")
              return (
                <div className="card-estado-resultado" key={cand.n}>
                  <span className={cand.nm === "LULA" ? "lula" : "bolsonaro"}>
                    {cand.nm.length > 4 ? cand.nm.slice(0, -8) : cand.nm}
                  </span>
                  <span>{cand.pvap}%</span>
                </div>
              );
          })}
        {/* {lula > bolsonaro ? setVencedor("lula") : setVencedor("bolsonaro")} */}
      </div>
    </Paper>
  );
};

export default StateCard;
