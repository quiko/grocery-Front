import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/mealImage.jpg";
import "../../style/lists.css";


const MealItem = ({ meal}) => {
  return (
    <div className="card ">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" alt="meal" src={Image} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {meal.name}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <Link to={"/groceries/" + meal._id}>See grocery list</Link>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {meal.name}
          <i className="material-icons right">close</i>
        </span>
        <p>{meal.description}</p>
        <Link to={"/meals/"+meal._id}
          className="waves-effect waves-light btn-small"
        >
          Add groceries
        </Link>
      </div>
    </div>
  );
};

export default MealItem;
