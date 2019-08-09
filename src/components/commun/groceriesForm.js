import React from 'react';
import "../../style/form.css";
//this one and meal-form should be derived from one reusable component "Form" for example
// but I did'nt have  time to figure it out
const GroceriesForm = ({onSubmit,name,price, onChange}) => {
    return ( 
        <div className="container form">
        <form className="white" onSubmit={onSubmit}>
          <h5 className="grey-text text-darken-3">Add a grocery item</h5>
          <div className="input-field">
            <input
              type="text"
              id="name"
              value={name}
              className="materialize-textarea"
              onChange={onChange}
            />
            <label htmlFor="title">what ?</label>
          </div>
          <div className="input-field">
            <textarea
              type="text"
              value={price}
              id="price"
              className="materialize-textarea"
              onChange={onChange}
            />
            <label htmlFor="content">How much? </label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Add</button>
          </div>
        </form>
      </div>
    );
     
}
 
export default GroceriesForm;