import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = (props) => {
  const [state, setState] = useState({
    currentuser: {
      id: 23,
      username: "Guest Account",
      password: "1234",
      email: "guestaccount@gmail.com",
      first_name: "Guest",
      last_name: "Account",
      created_on: "2020-04-14T06:28:40.000Z",
    },
    cart: [],
    currentTab: "",
    showLoginAlert: false,
    showPaymentLoading: false,
    paymentSuccess: false,
    showPaymentAlert: false,
    orderHistory: [],
    loading: false,
  });

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
