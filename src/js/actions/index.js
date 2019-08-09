import axios from "axios";
// for all fetch purpose
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
//tried to do one general post function instead of these , didn' work out properly :-(
export const postDataToApi = (apiUrl, action, Data) => {
  return dispatch => {
    return axios
      .post(apiUrl, {
        name: Data.name,
        description: Data.description,
        groceries : Data.groceries
      })
      .then(response => {
        dispatch(action(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const postGroceriesToMeal = (apiUrl, action, Data) =>{
  return dispatch => {
    return axios
      .post(apiUrl, {
        name: Data.name,
        price: Data.price,
        buyer : Data.buyer
      })
      .then(response => {
        dispatch(action(response.data));
      })
      .catch(error => {
        throw error;
      });
  };

}
