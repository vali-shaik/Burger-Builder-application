import React from "react";
import Aux from "./../../../hoc/Auxillary";
import { Button } from "react-bootstrap";
import classes from "./../OrderSummary/OrderSummary.module.css";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <p>
          {igkey} : {props.ingredients[igkey]}
        </p>
      </li>
    );
  });
  const continueHandler = () => {
    alert("Thanks for ordering!!! Enjoy your meal");
  };
  return (
    <Aux>
      <ul>{ingredientSummary}</ul>
      <h3>Total amount : {props.totalPrice}</h3>
      <Button
        variant="success"
        className={classes.ContinueButton}
        onClick={continueHandler}
      >
        CONTINUE
      </Button>
    </Aux>
  );
};
export default orderSummary;
