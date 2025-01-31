import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "./../../components/Burger/OrderSummary/OrderSummary";
import { Modal } from "react-bootstrap";

const INGREDIENTS_PRICE = { salad: 0.5, meat: 1.8, cheese: 0.9, bacon: 1.9 };

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  purchasingHander = () => {
    this.setState({ purchasing: true });
  };
  updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchasable: sum > 0 ? true : false,
    });
  };

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENTS_PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchasable(updatedIngredients);
  };

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount > 0 ? oldCount - 1 : oldCount;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const oldPrice = this.state.totalPrice;
    let newPrice = 0;
    if (newCount !== oldCount) {
      newPrice = oldPrice - INGREDIENTS_PRICE[type];
    } else {
      newPrice = oldPrice;
    }
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchasable(updatedIngredients);
  };
  closeModal = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        {
          <Modal show={this.state.purchasing} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Order Summary</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <OrderSummary
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
              />
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        }
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          added={this.addIngredient}
          removed={this.removeIngredient}
          disabledInfo={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchasingHander}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
