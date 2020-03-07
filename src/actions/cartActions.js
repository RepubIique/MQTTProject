import { useContext } from "react";
import { GlobalContext } from "./globalContext";

const CartActions = () => {
  const [state, setState] = useContext(GlobalContext);

  function addToCart(data) {
    let { cart } = state;
    cart.push(data);
    setState({ ...state, cart });
  }

  return {
    addToCart
  };
};

export default CartActions;
