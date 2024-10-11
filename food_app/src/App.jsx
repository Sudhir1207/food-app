import { useState } from "react";
import Search from "./components/search"
import FoodList from "./components/FoodList";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
    <Search foodData={foodData} setFoodData={setFoodData} />
    <FoodList foodData={foodData}/>
    </div>
  )
}

export default App
