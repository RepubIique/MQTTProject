import { useContext } from "react";
import { GlobalContext } from "./globalContext";

const CartActions = () => {
  const [state, setState] = useContext(GlobalContext);

  function addToCart(data) {
    let { cart } = state;
    cart.push(data);
    setState({ ...state, cart });
  }

  function removeItem(data) {
    let { cart } = state;
    let toRemove = data;
    let filteredArray = cart.filter(function(item) {
      return item.id !== toRemove;
    });
    setState({ ...state, cart: filteredArray });
  }

  return {
    addToCart,
    removeItem
  };
};

export default CartActions;
