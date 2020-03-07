import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = props => {
  const [state, setState] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    cart: [],
    currentTab: ""
  });

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
