import { useContext } from "react";
import { GlobalContext } from "./globalContext";

const CartRemove = () => {
  const [state, setState] = useContext(GlobalContext);

  function removeItem(data) {
    let { cart } = state;
    let toRemove = data.id;
    let filteredArray = cart.filter(function(item) {
      return item.id !== toRemove;
    });

    setState({ ...state, cart: filteredArray });

    console.log("data:" + data);
  }
  return {
    removeItem
  };
};

export default CartRemove;
