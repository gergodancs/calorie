import React from "react";

const Results = (props) => {
  const resetDaily = () => {
    props.setResData([
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

        <span>Kalória: {props.resData[0].data.avgCal}</span>
        <span>Fehérje: {props.resData[0].data.avgProt} </span>
        <span>Zsírok: {props.resData[0].data.avgFat} </span>
        <span>Szénhidrát: {props.resData[0].data.avgCarb} </span>
      </div>

      <button onClick={resetDaily}>Nulláz</button>
    </div>
  );
};

export default Results;
