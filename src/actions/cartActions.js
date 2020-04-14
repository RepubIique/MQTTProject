import { useContext } from "react";
import { GlobalContext } from "./globalContext";

const CartActions = () => {
  const [state, setState] = useContext(GlobalContext);

  function addToCart(data) {
    let { currentuser, cart } = state;
    if (currentuser) {
      cart.push(data);
      setState({ ...state, cart });
    } else {
      setState({ ...state, showLoginAlert: true });
    }
  }

  function removeItem(data) {
    let { cart } = state;
    let toRemove = data;
    let filteredArray = cart.filter(function (item) {
      return item.id !== toRemove;
    });
    setState({ ...state, cart: filteredArray });
  }

  function checkOut() {
    let { cart, currentuser } = state;
    const obj = {
      cart: cart.map((x) => x.id),
      totalAmount: cart.reduce((a, b) => a + b.price, 0),
      userid: currentuser.id,
    };
    return obj;
  }

  function clearCart() {
    setState({ ...state, cart: [] });
  }

  return {
    addToCart,
    removeItem,
    clearCart,
    checkOut,
  };
};

export default CartActions;
