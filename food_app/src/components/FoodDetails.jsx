import styles from "./fooddetails.module.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, SetFood] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "6c2e7c19479d430ab57408181fe996c5";
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      SetFood(data);
      setIsLoading(false);
    }

    fetchData();
  }, [foodId]);
  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌛{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong> 🧑‍🧑‍🧒‍🧒 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 🥬 Vegetarian" : " 🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " 🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>${food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
