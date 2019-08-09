import React from "react";
import "../../style/form.css";

const CreateMealForm = ({ onChange, onSubmit, name, description }) => {
  return (
    <div className="container form">
      <form className="white" onSubmit={onSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Meal</h5>
        <div className="input-field">
          <input
            type="text"
            id="name"
            value={name}
            className="materialize-textarea"
            onChange={onChange}
          />
          <label htmlFor="title">give it a name !</label>
        </div>
        <div className="input-field">
          <textarea
            type="text"
            value={description}
            id="description"
            className="materialize-textarea"
            onChange={onChange}
          />
          <label htmlFor="content">what is it about ? </label>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateMealForm;
