import { useContext } from "react";
import { GlobalContext } from "./globalContext";

const CartActions = () => {
  const [state, setState] = useContext(GlobalContext);

  function onInputChange(data) {
    setState(state => ({ ...state, cart: state.cart.push(data.value) }));
    // setState(state => ({ ...state, [data.key]: data.value }));
    console.log("cart", state);
  }

  return {
    onInputChange
  };
};

export default CartActions;
