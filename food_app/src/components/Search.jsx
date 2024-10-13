import { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "6c2e7c19479d430ab57408181fe996c5"

export default function Search({foodData, setFoodData}){
    const[query, setQuery] = useState("pizza");
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query= ${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }

        fetchFood();
    },[query]);
    return(
        <div className={styles.searchContainer}>
            <input className={styles.input}
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
        </div>
    )
}