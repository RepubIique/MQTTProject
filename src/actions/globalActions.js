import { useContext } from "react";
import { GlobalContext } from "./globalContext";

const GlobalActions = () => {
  const [state, setState] = useContext(GlobalContext);

  function changeTabs(tab) {
    setState(state => ({ ...state, currentTab: tab }));
  }

  return {
    changeTabs
  };
};

export default GlobalActions;
