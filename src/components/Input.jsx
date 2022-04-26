import React from "react";
import { useState } from "react";
import { useEffect, useContext } from "react";
import SetCtx from "../setContext";
import AutoComplete from "./AutoComplete";

const Input = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState(0);
  const [postData, setPostData] = useState([]);
  const [showList, setShowList] = useState(false);
  const [sugg, setSugg] = useState([]);

  const { data, setShowInput, setSumData, setDisplayMeal, displayMeal } =
    useContext(SetCtx);

  let filtered;

  const autoComp2 = () => {
    filtered = data.filter((item) => item.name.includes(input));
    setSugg(filtered);
  };

  useEffect(() => {
    autoComp2();
  }, [input]);

  const summarizeData = () => {
    fetch("https://calorie-calculator-spring.herokuapp.com/getmealstatistic", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => setSumData([{ data }]));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setDisplayMeal([...displayMeal, `${input}: ${amount}`]);
    setShowList(false);
    setPostData([...postData, { id: id, name: input, amount: Number(amount) }]);
    summarizeData();
    // setInput("");
    // setAmount(0);
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
          <button onClick={() => setShowInput(false)} type="button">
            Close
          </button>
        </div>
      </form>
      {showList && (
        <AutoComplete
          sugg={sugg}
          setInput={setInput}
          setId={setId}
          setShowList={setShowList}
        />
      )}
    </>
  );
};

export default Input;
