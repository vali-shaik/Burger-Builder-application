import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
];

// const orderModal = () => {
//   return (
//     <div className="container">
//       <Modal show={true} onHide={true}>
//         <Modal.Header closeButton>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <orderSummary />
//         </Modal.Body>
//         <Modal.Footer></Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Total Price :<strong> {props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map((eachControl) => {
        return (
          <BuildControl
            key={eachControl.label}
            label={eachControl.label}
            added={() => {
              props.added(eachControl.type);
            }}
            removed={() => {
              props.removed(eachControl.type);
            }}
            disabledInfo={props.disabledInfo[eachControl.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default buildControls;
