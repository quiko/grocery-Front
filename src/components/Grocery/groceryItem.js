import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchGroceries,
  fetchMealGroceries
} from "../../js/actions/mealActions";
import { Api } from "../../js/constants";
import GroceriesDetails from "./groceryDetails";
import "../../style/lists.css";

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.mealsReducer,
    id: ownProps.match.params.id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchGroceries: (apiUrl, action) =>
      dispatch(fetchGroceries(apiUrl, action))
  };
};

class GroceryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const url = Api + this.props.id + "/groceries";
    this.props.onFetchGroceries(url, fetchMealGroceries);
  }

  render() {
    const array = Object.keys(this.props.data).map(elem => {
      return this.props.data[elem];
    });
    return (
      <div className="container">
        {this.props.data
          ? array.map(grocery => {
              return <GroceriesDetails grocery={grocery} />;
            })
          : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryItem);
