import React, { useState, useContext, useEffect } from "react";
import SetCtx from "../setContext";

const Menu = () => {
  const [selected, setSelected] = useState(-1);
  const [isShowDetails, setIsShowDetails] = useState(false);

  const { postData, summaryData, setShowInput, setPostData } =
    useContext(SetCtx);

  let toggle = summaryData?.data?.sumCarb > 0;

  useEffect(() => {
    toggle && setIsShowDetails(true);
  }, [summaryData]);

  const deleteItems = () => {
    if (selected < 0) {
      return alert("válassz egy elemet!");
    }

    postData.splice(selected, 1);
    setPostData([...postData], postData);
  };
  // console.log(postData);
  return (
    <div className="menu__container">
      <div className="menu-list">
        <h3>Kaja lista:</h3>
        {postData &&
          postData.map((item, index) => (
            <h3
              className="selected-food"
              onClick={() => {
                setSelected(index);
              }}
              key={index}
            >
              {item?.name}: {item.amount}g
            </h3>
          ))}
      </div>
      <div className="menu-buttons">
        <button onClick={() => setShowInput(true)}>Új étel</button>
        <button>Módosit</button>
        <button onClick={deleteItems}>Törlés</button>
      </div>
      <div className="menu-fogyasztas">
        <h2>Mai fogyasztás</h2>
        {isShowDetails && (
          <ul>
            <li>Fehérje: {summaryData?.data?.sumProt.toFixed(1)}</li>
            <li>Zsírok: {summaryData?.data?.sumFat.toFixed(1)}</li>
            <li>Szénhidrát: {summaryData?.data?.sumCarb.toFixed(1)}</li>
            <li>Kalória: {summaryData?.data?.sumCal.toFixed(1)}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
