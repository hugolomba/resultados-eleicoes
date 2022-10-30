import axios from "axios";
import { useEffect, useState } from "react";
import Candidate from "./components/Candidate";
import "./App.css";
import Navbar from "./components/Navbar";
import StateCard from "./components/StateCard";
import { LabelMultiple, SelectSearch } from "mdi-material-ui";
import Footer from "./components/Footer";

const sudeste = [
  {
    estado: "ES",
    url: "es/es-c0001-e000545-r.json",
  },
  {
    estado: "MG",
    url: "mg/mg-c0001-e000545-r.json",
  },
  {
    estado: "RJ",
    url: "rj/rj-c0001-e000545-r.json",
  },
  {
    estado: "SP",
    url: "sp/sp-c0001-e000545-r.json",
  },
];

const nordeste = [
  {
    estado: "AL",
    url: "al/al-c0001-e000545-r.json",
  },
  {
    estado: "BA",
    url: "ba/ba-c0001-e000545-r.json",
  },
  {
    estado: "CE",
    url: "ce/ce-c0001-e000545-r.json",
  },
  {
    estado: "MA",
    url: "ma/ma-c0001-e000545-r.json",
  },
  {
    estado: "PB",
    url: "pb/pb-c0001-e000545-r.json",
  },
  {
    estado: "PE",
    url: "pe/pe-c0001-e000545-r.json",
  },
  {
    estado: "PI",
    url: "pi/pi-c0001-e000545-r.json",
  },
  {
    estado: "RN",
    url: "rn/rn-c0001-e000545-r.json",
  },
  {
    estado: "SE",
    url: "se/se-c0001-e000545-r.json",
  },
];

const norte = [
  {
    estado: "AC",
    url: "ac/ac-c0001-e000545-r.json",
  },

  {
    estado: "AP",
    url: "ap/ap-c0001-e000545-r.json",
  },
  {
    estado: "AM",
    url: "am/am-c0001-e000545-r.json",
  },

  {
    estado: "PA",
    url: "pa/pa-c0001-e000545-r.json",
  },
  {
    estado: "RO",
    url: "ro/ro-c0001-e000545-r.json",
  },
  {
    estado: "RR",
    url: "rr/rr-c0001-e000545-r.json",
  },
  {
    estado: "TO",
    url: "to/to-c0001-e000545-r.json",
  },
];

const sul = [
  {
    estado: "PR",
    url: "pr/pr-c0001-e000545-r.json",
  },
  {
    estado: "SC",
    url: "sc/sc-c0001-e000545-r.json",
  },
  {
    estado: "RS",
    url: "rs/rs-c0001-e000545-r.json",
  },
];

const centroOeste = [
  {
    estado: "DF",
    url: "df/df-c0001-e000545-r.json",
  },
  {
    estado: "GO",
    url: "go/go-c0001-e000545-r.json",
  },
  {
    estado: "MT",
    url: "mt/mt-c0001-e000545-r.json",
  },
  {
    estado: "MS",
    url: "ms/ms-c0001-e000545-r.json",
  },
];

function App() {
  const [result, setResult] = useState();

  const [ES, setES] = useState({});
  const [MG, setMG] = useState({});
  const [RJ, setRJ] = useState({});
  const [SP, setSP] = useState({});

  const [AL, setAL] = useState({});
  const [BA, setBA] = useState({});
  const [CE, setCE] = useState({});
  const [MA, setMA] = useState({});
  const [PB, setPB] = useState({});
  const [PE, setPE] = useState({});
  const [PI, setPI] = useState({});
  const [RN, setRN] = useState({});
  const [SE, setSE] = useState({});

  const [AC, setAC] = useState({});
  const [AP, setAP] = useState({});
  const [AM, setAM] = useState({});
  const [PA, setPA] = useState({});
  const [RO, setRO] = useState({});
  const [RR, setRR] = useState({});
  const [TO, setTO] = useState({});

  const [PR, setPR] = useState({});
  const [SC, setSC] = useState({});
  const [RS, setRS] = useState({});

  const [DF, setDF] = useState({});
  const [GO, setGO] = useState({});
  const [MT, setMT] = useState({});
  const [MS, setMS] = useState({});

  const [mediaSudeste, setMediaSudeste] = useState();

  const regiaoSudeste = [ES, MG, RJ, SP];
  const regiaoNordeste = [AL, BA, CE, MA, PB, PE, PI, RN, SE];
  const regiaoNorte = [AC, AP, AM, PA, RO, RR, TO];
  const regiaoSul = [PR, SC, RS];
  const regiaoCentroOeste = [DF, GO, MT, MS];

  let lula = 20;
  let bolsonaro = 30;

  let mediaLula, mediaBolsonaro;

  const br1 = "br/br-c0001-e000545-r.json";
  const br = "br/br-c0001-e000545-r.json";

  // console.log(result);
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(
          `https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/${br}`
        )
        .then((response) => {
          setResult(response.data);
          // console.log("response.data total: ", response.data);
          // console.log(response.data);
        });

      // sudeste.map((estado) => {
      //   let lulaSudeste = 0;
      //   axios
      //     .get(
      //       `https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados${estado.url}`
      //     )
      //     .then((response) => {
      //       lulaSudeste += parseFloat(response.data.cand[0].pvap);
      //       console.log(response.data.cand[0].pvap);
      //       // console.log(lulaSudeste);
      //     });
      // });

      // sudeste.map((estado) => {
      //   axios
      //     .get(
      //       `https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/${estado.url}`
      //     )
      //     .then((response) => {
      //       let regiaoSudesteCopy = { ...regiaoSudeste };
      //       // regiaoSudesteCopy[estado.estado] = response.data
      //       // setRegiaoSudeste(regiaoSudesteCopy);
      //       console.log(response);
      //       console.log("COPY: ", regiaoSudesteCopy);
      // switch (response.data.cdabr) {
      //   case "ES":
      //     regiaoSudesteCopy.ES = response.data;
      //     setRegiaoSudeste(regiaoSudesteCopy);
      //     break;

      //   case "MG":
      //     regiaoSudesteCopy.MG = response.data;
      //     setRegiaoSudeste(regiaoSudesteCopy);
      //     break;

      //   case "RJ":
      //     regiaoSudesteCopy.RJ = response.data;
      //     setRegiaoSudeste(regiaoSudesteCopy);
      //     break;

      //   case "SP":
      //     regiaoSudesteCopy.SP = response.data;
      //     setRegiaoSudeste(regiaoSudesteCopy);
      //     break;
      // }
      //     });
      // });

      const getInfo = async (url) => {
        try {
          const { data } = await axios.get(
            `https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/${url}`
          );
          return data;
        } catch (error) {
          console.log(error);
        }
      };

      const getAllSudeste = async () => {
        for (let estado of sudeste) {
          let regiaoSudesteCopy = { ...regiaoSudeste };
          let infoEstado = await getInfo(estado.url);

          switch (infoEstado.cdabr) {
            case "ES":
              setES(infoEstado);
              break;

            case "MG":
              setMG(infoEstado);
              break;

            case "RJ":
              setRJ(infoEstado);
              break;

            case "SP":
              setSP(infoEstado);
              break;
          }
        }
      };

      const getAllNordeste = async () => {
        for (let estado of nordeste) {
          let regiaoSudesteCopy = { ...regiaoSudeste };
          let infoEstado = await getInfo(estado.url);

          switch (infoEstado.cdabr) {
            case "AL":
              setAL(infoEstado);
              break;

            case "BA":
              setBA(infoEstado);
              break;

            case "CE":
              setCE(infoEstado);
              break;

            case "MA":
              setMA(infoEstado);
              break;
            case "PB":
              setPB(infoEstado);
              break;

            case "PE":
              setPE(infoEstado);
              break;

            case "PI":
              setPI(infoEstado);
              break;

            case "RN":
              setRN(infoEstado);
              break;
            case "SE":
              setSE(infoEstado);
              break;
          }
        }
      };

      const getAllNorte = async () => {
        for (let estado of norte) {
          let regiaoSudesteCopy = { ...regiaoSudeste };
          let infoEstado = await getInfo(estado.url);

          switch (infoEstado.cdabr) {
            case "AC":
              setAC(infoEstado);
              break;

            case "AP":
              setAP(infoEstado);
              break;

            case "AM":
              setAM(infoEstado);
              break;

            case "PA":
              setPA(infoEstado);
              break;
            case "RO":
              setRO(infoEstado);
              break;

            case "RR":
              setRR(infoEstado);
              break;

            case "TO":
              setTO(infoEstado);
              break;
          }
        }
      };

      const getAllSuL = async () => {
        for (let estado of sul) {
          let regiaoSudesteCopy = { ...regiaoSudeste };
          let infoEstado = await getInfo(estado.url);

          switch (infoEstado.cdabr) {
            case "PR":
              setPR(infoEstado);
              break;

            case "SC":
              setSC(infoEstado);
              break;

            case "RS":
              setRS(infoEstado);
              break;
          }
        }
      };

      const getAllCentroOeste = async () => {
        for (let estado of centroOeste) {
          let infoEstado = await getInfo(estado.url);

          switch (infoEstado.cdabr) {
            case "DF":
              setDF(infoEstado);
              break;

            case "GO":
              setGO(infoEstado);
              break;

            case "MT":
              setMT(infoEstado);
              break;

            case "MS":
              setMS(infoEstado);
              break;
          }
        }
      };

      getAllNorte();
      getAllSudeste();
      getAllNordeste();
      getAllSuL();
      getAllCentroOeste();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // console.log(
  //   "stateResul:  ",
  //   stateResult.find((element) => element)
  // );

  // setInterval(() => {
  //   axios
  //     .get(
  //       `https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/${br}`
  //     )
  //     .then((response) => {
  //       setResult(response.data);
  //       console.log(response.data);
  //     });
  // }, 5000);

  return (
    <div className="main-container">
      {/* <Navbar /> */}
      <div className="info-container">
        <h1>Eleições 2022 (2º turno)</h1>
        <span>
          Porcentagem de urnas apuradas: <strong>{result && result.pst}</strong>
          <br />
          Ultima atualização:{" "}
          <strong>
            {result && result.dg} {result && result.hg}
          </strong>
        </span>

        {/* {result &&
          result.cand.map((cand) => {
            if (cand.nm === "LULA") lula = cand.pvap;
            if (cand.nm === "JAIR BOLSONARO") bolsonaro = cand.pvap;
          })} */}

        <div className="candidate-container">
          {result &&
            result.cand.map((candidate) => {
              if (
                candidate.nm === "LULA" ||
                candidate.nm === "JAIR BOLSONARO"
              ) {
                return (
                  <Candidate
                    lulaWinning={lula > bolsonaro}
                    bolsonaroWinning={bolsonaro > lula}
                    key={candidate.n}
                    candidate={candidate}
                  />
                );
              }
            })}
        </div>

        <div className="states-container">
          <div className="regiao-container">
            <h2>Nordeste</h2>
            {regiaoNordeste.map((estado) => {
              return <StateCard key={estado.cdabr} estado={estado} />;
            })}
          </div>

          <div className="regiao-container">
            <h2>Norte</h2>
            {regiaoNorte.map((estado) => {
              return <StateCard key={estado.cdabr} estado={estado} />;
            })}
          </div>

          <div className="regiao-container">
            <h2>Sudeste</h2>
            {Object.keys(regiaoSudeste).length > 0
              ? regiaoSudeste.map((estado) => {
                  return <StateCard key={estado.cdabr} estado={estado} />;
                })
              : "Loading"}
          </div>

          <div className="regiao-container">
            <h2>Centro-Oeste</h2>
            {regiaoCentroOeste.map((estado) => {
              // estado.cand.map((cand) => {
              //   if (cand.nm === "LULA")
              //     Lula += parseFloat(cand.pvap.replace(",", "."));
              //   console.log(Lula);
              // });

              return <StateCard key={estado.cdabr} estado={estado} />;
            })}
          </div>

          <div className="regiao-container">
            <h2>Sul</h2>
            {regiaoSul.map((estado) => {
              return <StateCard key={estado.cdabr} estado={estado} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
