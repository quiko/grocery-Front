import React from "react";
import Image from "../../assets/images/mealImage.jpg";

const GroceriesDetails = ({ grocery }) => {
  return (
    
      <div className="card horizontal">
        <div className="card-image">
          <img alt=" groceries" src={Image} />
        </div>
        <div className="card-stacked">
          <div className="card-action">
            <ul>
              <li>
                <span>{grocery.name}</span>
              </li>
              <span>{grocery.price}</span>
            </ul>
          </div>
        </div>
      </div>
   
  );
};

export default GroceriesDetails;
