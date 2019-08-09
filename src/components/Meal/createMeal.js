import React, { Component } from "react";
import { connect } from "react-redux";
import CreateMealForm from "../commun/mealForm";
import { createMeal, postMeal } from "../../js/actions/mealActions";
import { postMealApi } from "../../js/constants";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    submitMeal: (apiUrl, action, data) => dispatch(createMeal(apiUrl, action, data))
  };
};

class CreateMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.submitMeal(postMealApi, postMeal, {
      name: this.state.name,
      description: this.state.description
    });
    this.props.history.push("/meals/list");
  }
  render() {
    return (
      <CreateMealForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        name={this.state.name}
        description={this.state.description}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMeal);
