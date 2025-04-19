import { useEffect, useState } from "react";
import axios from "axios";

const Meals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
        );
        setData(res.data.meals); 
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div>
      <h1>Meals</h1>
      {data?.map((meal) => (
        <div key={meal.idMeal}>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
        </div>
      ))}
    </div>
  );
};

export default Meals;
