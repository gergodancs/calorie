import React, { useState } from "react";

const Menu = (props) => {
  const [selected, setSelected] = useState(-1);
  const [selectedclass, setSelectedclass] = useState(false);

  const activeClass = selectedclass ? "active" : "selected-food";

  const deleteItems = () => {
    if (selected < 0) {
      return alert("válassz egy elemet!");
    }

    props.displayMeal.splice(selected, 1);
    props.setDisplayMeal([...props.displayMeal], props.displayMeal);
    setSelectedclass(false);
  };

  return (
    <div className="menu__container">
      <div className="menu-list">
        <h3>Kaja lista:</h3>
        {props.displayMeal.map((item, index) => (
          <h3
            className={activeClass}
            onClick={() => {
              setSelected(index);
              setSelectedclass(!selectedclass);
            }}
            key={index}
          >
            {item}
          </h3>
        ))}
      </div>
      <div className="menu-buttons">
        <button onClick={() => props.setShowInput(true)}>Új étel</button>
        <button>Módosit</button>
        <button onClick={deleteItems}>Törlés</button>
      </div>
      <div className="menu-fogyasztas">
        <h2>Mai fogyasztás</h2>
        <ul>
          <li>Fehérje: {props.resData[0].data.sumProt.toFixed(1)}</li>
          <li>Zsírok: {props.resData[0].data.sumFat.toFixed(1)}</li>
          <li>Szénhidrát: {props.resData[0].data.sumCarb.toFixed(1)}</li>
          <li>Kalória: {props.resData[0].data.sumCal.toFixed(1)}</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
