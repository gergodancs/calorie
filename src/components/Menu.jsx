import React, { useState, useContext } from "react";
import SetCtx from "../setContext";

const Menu = () => {
  const [selected, setSelected] = useState(-1);

  const { summaryData, setShowInput, displayMeal, setDisplayMeal } =
    useContext(SetCtx);

  const deleteItems = () => {
    if (selected < 0) {
      return alert("válassz egy elemet!");
    }

    displayMeal.splice(selected, 1);
    setDisplayMeal([...displayMeal], displayMeal);
  };

  return (
    <div className="menu__container">
      <div className="menu-list">
        <h3>Kaja lista:</h3>
        {displayMeal.map((item, index) => (
          <h3
            className="selected-food"
            onClick={() => {
              setSelected(index);
            }}
            key={index}
          >
            {item}
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
        <ul>
          <li>Fehérje: {summaryData[0].data.sumProt.toFixed(1)}</li>
          <li>Zsírok: {summaryData[0].data.sumFat.toFixed(1)}</li>
          <li>Szénhidrát: {summaryData[0].data.sumCarb.toFixed(1)}</li>
          <li>Kalória: {summaryData[0].data.sumCal.toFixed(1)}</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
