import { useContext } from "react";
import { GlobalContext } from "./globalContext";

const GlobalActions = () => {
  const [state, setState] = useContext(GlobalContext);

  function changeTabs(tab) {
    setState(() => ({ ...state, currentTab: tab }));
  }

  function toggleShowLoginAlert() {
    let { showLoginAlert } = state;
    setState(() => ({ ...state, showLoginAlert: !showLoginAlert }));
  }

  function toggleShowPaymentLoading() {
    let { showPaymentLoading } = state;
    setState(() => ({ ...state, showPaymentLoading: !showPaymentLoading }));
  }

  function toggleShowPaymentAlert(x = false) {
    let { showPaymentAlert } = state;
    setState(() => ({
      ...state,
      showPaymentAlert: !showPaymentAlert,
      paymentSuccess: x
    }));
  }

  return {
    changeTabs,
    toggleShowLoginAlert,
    toggleShowPaymentLoading,
    toggleShowPaymentAlert
  };
};

export default GlobalActions;
