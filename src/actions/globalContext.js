import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = props => {
  const [state, setState] = useState({
    currentuser: null,
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
