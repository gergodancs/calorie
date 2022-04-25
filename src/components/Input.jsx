import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Input = (props) => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState(0);
  const [postData, setPostData] = useState([]);
  const [showList, setShowList] = useState(false);
  const [sugg, setSugg] = useState([]);

  let filtered;

  const autoComp2 = () => {
    filtered = props.data.filter((item) => item.name.includes(input));
    setSugg(filtered);
  };

  useEffect(() => {
    autoComp2();
  }, [input]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    props.setDisplayMeal([...props.displayMeal, `${input}: ${amount}`]);
    setShowList(false);

    setPostData([...postData, { id: id, name: input, amount: Number(amount) }]);
    // setInput("");
    // setAmount(0);

    fetch("https://calorie-calculator-spring.herokuapp.com/getmealstatistic", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => props.setResData([{ data }]));
    console.log("ez", props.resData);
  };
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label>Food :</label>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowList(true);
          }}
          type="text"
        />
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <div className="form-buttons">
          <button>Submit</button>
          <button onClick={() => props.setShowInput(false)} type="button">
            Close
          </button>
        </div>
      </form>
      {showList && (
        <ul className="autocomplete">
          {sugg.map((item, index) => (
            <li
              onClick={() => {
                setInput(item.name);
                setId(item.id);
                setShowList(false);
              }}
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Input;
