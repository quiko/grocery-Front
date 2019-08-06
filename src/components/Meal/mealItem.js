import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMeals, fetchMealsAction } from "../../js/actions/mealActions";
import { fetchMealsApi } from "../../js/constants";


const mapDispatchToProps = dispatch => {
  return {
    onFetch: () => dispatch(fetchMeals(fetchMealsApi, fetchMealsAction))
  };
};
const mapStateToProps = state => {
  return {};
};

class MealItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
   this.props.onfetch()
  }

  render() {
    return <div />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealItem);
