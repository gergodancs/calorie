import { useEffect } from "react";
import { useState } from "react";
import Input from "./components/Input";
import Results from "./components/Results";
import Menu from "./components/Menu";
import SetCtx from "./setContext";

function App() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [summaryData, setSumData] = useState({});

  const url = "https://calorie-calculator-spring.herokuapp.com/getallmeal";

  const mealItemsFetch = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        return setData(items);
      });
  };

  useEffect(() => {
    mealItemsFetch();
  }, []);

  return (
    <SetCtx.Provider
      value={{
        summaryData,
        setSumData,
        setShowInput,

        data,
        postData,
        setPostData,
      }}
    >
      <div className="App">
        <Results />
        <Menu />
        {showInput && <Input />}
      </div>
    </SetCtx.Provider>
  );
}

export default App;
