import { useContext } from "react";
import { GlobalContext } from "./globalContext";
import { cart } from "ionicons/icons";

const CartActions = () => {
  const [state, setState] = useContext(GlobalContext);

  function addToCart(data) {
    let { cart } = state;
    cart.push(data.id);
    setState({ ...state, cart });
  }

  return {
    addToCart
  };
};

export default CartActions;
