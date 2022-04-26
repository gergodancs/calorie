import React, { useContext } from "react";
import SetCtx from "../setContext";

const Results = () => {
  const { resData, setResData } = useContext(SetCtx);

  const resetDaily = () => {
    setResData([
      {
        data: {
          sumCal: 0,
          sumCarb: 0,
          sumFat: 0,
          sumProt: 0,
          avgCal: 0,
          avgCarb: 0,
          avgFat: 0,
          avgProt: 0,
        },
      },
    ]);
  };

  return (
    <div className="results__container">
      <div>
        <h5>Napi átlag</h5>

        <span>Kalória: {resData[0].data.avgCal}</span>
        <span>Fehérje: {resData[0].data.avgProt} </span>
        <span>Zsírok: {resData[0].data.avgFat} </span>
        <span>Szénhidrát: {resData[0].data.avgCarb} </span>
      </div>

      <button onClick={resetDaily}>Nulláz</button>
    </div>
  );
};

export default Results;
