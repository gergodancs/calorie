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

      <button onClick={resetDaily}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Results;
