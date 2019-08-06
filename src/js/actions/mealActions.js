import { FETCH_MEALS } from "./actionTypes";
import { fetchApiData } from "./index";



export const fetchMealsAction = meals => {
  return {
    type: FETCH_MEALS,
    meals
  };
};
export const fetchMeals = (apiUrl, action) =>
  dispatch(fetchApiData(apiUrl, action));
