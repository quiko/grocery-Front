import React, { Component } from "react";
import { connect } from "react-redux";
import GroceriesForm from "../commun/groceriesForm";
import { addMealGroceries, postGroceries } from "../../js/actions/mealActions";
import { Api } from "../../js/constants";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    submitGrocery: (apiUrl, action, Data) =>
      dispatch(addMealGroceries(apiUrl, action, Data))
  };
};

class CreateGroceries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };
    this.handleSubmit =this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  async handleSubmit(e) {
    e.preventDefault();
    const url = Api + this.props.match.params.id + "/groceries/create";
    await this.props.submitGrocery(url, postGroceries, {
      name: this.state.name,
      price: this.state.price
    });
    this.props.history.push("/meals/list");
  }
  render() {
    return (
      <GroceriesForm
        name={this.state.name}
        price={this.state.price}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroceries);
