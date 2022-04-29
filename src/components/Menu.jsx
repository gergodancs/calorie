import React, { useState, useContext, useEffect } from "react";
import SetCtx from "../setContext";

const Menu = () => {
  const [isShowDetails, setIsShowDetails] = useState(false);

  const { postData, summaryData, setShowInput, setPostData } =
    useContext(SetCtx);

  let toggle = summaryData?.data?.sumCarb > 0;

  useEffect(() => {
    toggle && setIsShowDetails(true);
  }, [summaryData]);

  const deleteItems = (index) => {
    if (index < 0) {
      return alert("válassz egy elemet!");
    }

    postData.splice(index, 1);
    setPostData([...postData], postData);
  };
  // console.log(postData);
  return (
    <div className="menu__container">
      <div className="menu-list">
        <div className="menu-buttons">
          <button onClick={() => setShowInput(true)}>Új étel</button>
        </div>
        {postData &&
          postData.map((item, index) => (
            <div className="list" key={index}>
              <h3 className="selected-food" key={index}>
                {item?.name}: {item.amount}g
              </h3>
              <button className="del" onClick={() => deleteItems(index)}>
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
          ))}
      </div>

      <div className="menu-fogyasztas">
        <h2>Mai fogyasztás</h2>
        {isShowDetails && (
          <ul>
            <li>Fehérje: {summaryData?.data?.sumProt}</li>
            <li>Zsírok: {summaryData?.data?.sumFat}</li>
            <li>Szénhidrát: {summaryData?.data?.sumCarb}</li>
            <li>Kalória: {summaryData?.data?.sumCal}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
