import { useEffect } from "react";
import { useState } from "react";
import Input from "./components/Input";
import Results from "./components/Results";
import Menu from "./components/Menu";

function App() {
  const [displayMeal, setDisplayMeal] = useState([]);
  const [data, setData] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [resData, setResData] = useState([
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

  //console.log(resData[0].sumCal);

  const url = "https://calorie-calculator-spring.herokuapp.com/getallmeal";

  const mealItemsFetch = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        console.log(items);
        return setData(items);
      });
  };

  useEffect(() => {
    mealItemsFetch();
  }, []);

  return (
    <div className="App">
      <Results setResData={setResData} resData={resData} />
      <Menu
        resData={resData}
        setShowInput={setShowInput}
        displayMeal={displayMeal}
        setDisplayMeal={setDisplayMeal}
      />
      {showInput && (
        <Input
          data={data}
          setShowInput={setShowInput}
          resData={resData}
          setResData={setResData}
          setDisplayMeal={setDisplayMeal}
          displayMeal={displayMeal}
        />
      )}
    </div>
  );
}

export default App;
