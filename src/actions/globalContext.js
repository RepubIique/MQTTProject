import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = props => {
  const [state, setState] = useState({
    currentuser: null,
    cart: [],
    currentTab: "",
    showLoginAlert: false,
    showPaymentLoading: false,
    paymentSuccess: false,
    showPaymentAlert: false
  });

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
