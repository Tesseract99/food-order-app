import React from "react";
import cssClasses from "./AvailableMealsCard.module.css";
import MealItemForm from "./MealItemForm";

const AvailableMealsCard = (props) => {
  return (
    <React.Fragment>
      <div className={cssClasses.card}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <h4>₹ {props.price}</h4>

        <MealItemForm />
      </div>
    </React.Fragment>
  );
};

export default AvailableMealsCard;
