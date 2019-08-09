import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMeals, fetchMealsAction} from "../../js/actions/mealActions";
import { fetchMealsApi } from "../../js/constants";
import MealItem from "./mealItem";

const mapDispatchToProps = dispatch => {
  return {
    onFetch: (apiUrl, action) => dispatch(fetchMeals(apiUrl, action)),
   
  };
};
const mapStateToProps = state => {
  return {
    data: state.mealsReducer.meal
  };
};

class MealList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onFetch(fetchMealsApi, fetchMealsAction);
  }

  render() {
    return (
      <div className="container">
        {this.props.data
          ? this.props.data.map(meal => {
              return <MealItem meal={meal} id ={meal._id} key={meal._id} />;
            })
          : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealList);
