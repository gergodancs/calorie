import React from "react";

const AutoComplete = (props) => {
  return (
    <ul className="autocomplete">
      {props.data.map((item, index) => (
        <li
          onClick={() => {
            props.setInput(item.name);
            props.setId(item.id);
            props.setShowList(false);
          }}
          key={index}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default AutoComplete;
