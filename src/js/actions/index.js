import axios from "axios";

export const fetchApiData = (apiUrl, action) => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(action(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
