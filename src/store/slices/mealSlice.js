import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  weeks: {
    week1: [],
    week2: [],
    week3: [],
    week4: [],
  },
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setMeals: (state, action) => {
      state.meals = action.payload;
    },
    addToWeek: (state, action) => {
      const { week, meals } = action.payload;

      if (!state.weeks[week]) {
        console.error(`Invalid week: "${week}".`);
        return;
      }

      meals.forEach((mealId) => {
        if (!state.weeks[week].includes(mealId)) {
          state.weeks[week].push(mealId);
        }
      });
    },
    removeFromWeek: (state, action) => {
      const { week, mealId } = action.payload;
      state.weeks[week] = state.weeks[week].filter((meal) => meal !== mealId);
    },
  },
});

export const { setMeals, addToWeek, removeFromWeek } = mealSlice.actions;
export default mealSlice.reducer;
