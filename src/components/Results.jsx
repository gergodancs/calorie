import React, { useContext } from "react";
import SetCtx from "../setContext";

const Results = () => {
  const { summaryData, setSumData } = useContext(SetCtx);

  const resetDaily = () => {
    setSumData([
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

        <span>Kalória: {summaryData[0].data.avgCal}</span>
        <span>Fehérje: {summaryData[0].data.avgProt} </span>
        <span>Zsírok: {summaryData[0].data.avgFat} </span>
        <span>Szénhidrát: {summaryData[0].data.avgCarb} </span>
      </div>

      <button onClick={resetDaily}>Nulláz</button>
    </div>
  );
};

export default Results;
