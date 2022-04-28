import React, { useContext, useState, useEffect } from "react";
import SetCtx from "../setContext";

const Results = () => {
  const { summaryData, setSumData, setPostData } = useContext(SetCtx);
  const [isShowAvg, setIsShowAvg] = useState(false);

  const resetDaily = () => {
    setSumData({});
    setPostData([]);
    setIsShowAvg(false);
  };

  let toggle = typeof summaryData?.data?.avgCal === "number";

  useEffect(() => {
    toggle && setIsShowAvg(true);
  }, [summaryData]);

  return (
    <div className="results__container">
      <div>
        <h5>Napi átlag</h5>
        {isShowAvg && (
          <>
            <span>Kalória: {summaryData?.data?.avgCal}</span>
            <span>Fehérje: {summaryData?.data?.avgProt} </span>
            <span>Zsírok: {summaryData?.data?.avgFat} </span>
            <span>Szénhidrát: {summaryData?.data?.avgCarb} </span>
          </>
        )}
      </div>

      <button onClick={resetDaily}>Nulláz</button>
    </div>
  );
};

export default Results;
