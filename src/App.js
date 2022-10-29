import axios from "axios";
import { useEffect, useState } from "react";
import Candidate from "./components/Candidate";
import "./App.css";
import Navbar from "./components/Navbar";
import StateCard from "./components/StateCard";
import { LabelMultiple } from "mdi-material-ui";

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

function App() {
  const [result, setResult] = useState();

  const [ES, setES] = useState({});
  const [MG, setMG] = useState({});
  const [RJ, setRJ] = useState({});
  const [SP, setSP] = useState({});

  const regiaoSudeste = [ES, MG, RJ, SP];
  console.log(regiaoSudeste);

  // const sudesteResult = [];

  const br1 = "br/br-c0001-e000544-r.json";
  const br = "br/br-c0001-e000545-r.json";

  // console.log(result);
  useEffect(() => {
    axios
      .get(
        `https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/${br1}`
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
    //       `https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados${estado.url}`
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

    const getAll = async () => {
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

    getAll();
  }, []);

  // console.log(
  //   "stateResul:  ",
  //   stateResult.find((element) => element)
  // );

  // setInterval(() => {
  //   axios
  //     .get(
  //       `https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/${br}`
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
        <h1>Eleções 2022 (segundo turno)</h1>
        <span>
          Porcentagem de urnas apuradas: <strong>{result && result.pst}</strong>
          <br />
          Ultima atualização:{" "}
          <strong>
            {result && result.dg} {result && result.hg}
          </strong>
        </span>

        <div className="candidate-container">
          {result &&
            result.cand.map((candidate) => {
              if (candidate.nm === "LULA" || candidate.nm === "JAIR BOLSONARO")
                return <Candidate key={candidate.n} candidate={candidate} />;
            })}
        </div>

        <div className="states-container">
          {regiaoSudeste.map((estado) => {
            return <StateCard estado={estado} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
