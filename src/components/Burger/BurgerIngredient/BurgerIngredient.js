import React from "React";
import classes from "./BurgerIngredient.module.css";
const burgerIngredient = (props) => {
  const ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div>
          <div className={classes.BreadTop}></div>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;

    case "meat":
      ingredient = <div className={classes.Meat}></div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    default:
      ingredient = null;
      break;
  }
  return ingredient;
};
export default burgerIngredient;
