import React from "react";
import classes from "./../Burger/Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { array } from "prop-types";
const burger = (props) => {
  let targetIngredients =
    //Fetching the ingredients as keys Array
    Object.keys(props.ingredients)
      .map((igKey) => {
        //For each ingredient creating another array and looping it based on its length
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          //Fetching the index value for each ingredient
          //Key is defined as these are JSX array elements instead of a overall div tag
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((array, el) => {
        return array.concat(el);
      }, []);
  if (targetIngredients.length === 0) {
    targetIngredients = <p>Please select ingredients!!!</p>;
  }
  console.log("Target ingredients : ", targetIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {targetIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
