import { FETCH_MEALS, FETCH_MEAL_GROCERIES,ADD_MEAL ,ADD_GROCERIES_TO_MEAL} from "./actionTypes";
import { fetchApiData, postDataToApi ,postGroceriesToMeal,} from "./index";

export const fetchMealsAction = meal => {
  return {
    type: FETCH_MEALS,
    meal
  };
};
export const fetchMealGroceries = groceries =>{
  return{
    type: FETCH_MEAL_GROCERIES,
    groceries
  }
};
export const postMeal = meal =>{
  return{
    type :ADD_MEAL,
    meal
  }
};
export const postGroceries = groceries =>{
  return{
    type: ADD_GROCERIES_TO_MEAL,
    groceries
  }
}

export const fetchMeals = (apiUrl, action) => fetchApiData(apiUrl, action);
export const fetchGroceries =(apiUrl, action) => fetchApiData(apiUrl, action);
export const createMeal =(apiUrl, action, Data) => postDataToApi(apiUrl,action, Data);
export const addMealGroceries =(apiUrl, action, Data) => postGroceriesToMeal(apiUrl,action, Data)
