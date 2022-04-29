import React from "react";
import { useState } from "react";
import { useEffect, useContext } from "react";
import SetCtx from "../setContext";
import AutoComplete from "./AutoComplete";

const Input = () => {
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState(0);
  const [showList, setShowList] = useState(false);

  const {
    input,
    setInput,
    data,
    setShowInput,
    setSumData,
    postData,
    setPostData,
  } = useContext(SetCtx);

  useEffect(() => {
    sendDataToServer();
  }, [postData]);

  const sendDataToServer = () => {
    fetch("https://calorie-calculator-spring.herokuapp.com/getmealstatistic", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => setSumData({ data }));
    console.log("summarize", postData);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
    setShowList(true);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (input.length < 1) return alert("Válassz egy ételt");
    if (amount === 0) return alert("Add meg a mennyiséget");
    setShowList(false);
    setPostData([...postData, { id: id, name: input, amount: Number(amount) }]);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label>Food :</label>
        <input value={input} onChange={onChangeInput} type="text" />
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
          data={data}
          setInput={setInput}
          setId={setId}
          setShowList={setShowList}
        />
      )}
    </>
  );
};

export default Input;
