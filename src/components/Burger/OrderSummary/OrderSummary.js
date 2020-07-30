import React from "react";
import Aux from "./../../../hoc/Auxillary";

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

  return (
    <Aux>
      <h3>Your order summary:</h3>
      <ul>{ingredientSummary}</ul>
    </Aux>
  );
};
export default orderSummary;
