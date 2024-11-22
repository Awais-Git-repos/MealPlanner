import { useEffect, useState } from "react";
import { fetchMeals } from "../services/mealService";

const useMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMeals = async () => {
      try {
        const data = await fetchMeals();
        setMeals(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMeals();
  }, []);

  return { meals, loading, error };
};

export default useMeals;
