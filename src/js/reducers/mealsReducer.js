import {
  FETCH_MEALS,
  FETCH_MEAL_GROCERIES,
  ADD_MEAL,
  ADD_GROCERIES_TO_MEAL
} from "../actions/actionTypes";

export default function mealsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MEALS:
      return action.meal;
    case FETCH_MEAL_GROCERIES:
      return action.groceries;
    case ADD_MEAL:
      return action.meal;
    case ADD_GROCERIES_TO_MEAL:
      return action.groceries;
    default:
      return state;
  }
}
