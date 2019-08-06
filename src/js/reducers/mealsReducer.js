import { FETCH_MEALS } from '../actions/actionTypes';

export default function mealsReducer(state = [], action) {
  switch (action.type) {
      case FETCH_MEALS :
      return action.data;
    default:
      return state;
  }
}