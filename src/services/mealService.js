import api from "./api";

export const fetchMeals = async () => {
  try {
    const response = await api.get("/");
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw new Error("Failed to fetch meals");
  }
};
