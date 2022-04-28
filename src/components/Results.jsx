import React, { useContext } from "react";
import SetCtx from "../setContext";

const Results = () => {
  const { summaryData, setSumData } = useContext(SetCtx);

  const resetDaily = () => {
    setSumData({});
  };

  return (
    <div className="results__container">
      <div>
        <h5>Napi átlag</h5>

        <span>Kalória: {summaryData?.data?.avgCal}</span>
        <span>Fehérje: {summaryData?.data?.avgProt} </span>
        <span>Zsírok: {summaryData?.data?.avgFat} </span>
        <span>Szénhidrát: {summaryData?.data?.avgCarb} </span>
      </div>

      <button onClick={resetDaily}>Nulláz</button>
    </div>
  );
};

export default Results;
