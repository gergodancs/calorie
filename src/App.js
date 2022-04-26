import { useEffect } from "react";
import { useState } from "react";
import Input from "./components/Input";
import Results from "./components/Results";
import Menu from "./components/Menu";
import SetCtx from "./setContext";

function App() {
  const [displayMeal, setDisplayMeal] = useState([]);
  const [data, setData] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [summaryData, setSumData] = useState([
    {
      data: {
        sumCal: 0,
        sumCarb: 0,
        sumFat: 0,
        sumProt: 0,
        avgCal: 0,
        avgCarb: 0,
        avgFat: 0,
        avgProt: 0,
      },
    },
  ]);

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
        displayMeal,
        setDisplayMeal,
        data,
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
