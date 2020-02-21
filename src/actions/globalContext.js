import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = props => {
  const [state, setState] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    errors: true,
    cart: [],
    currentTab: "tab1"
  });

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
