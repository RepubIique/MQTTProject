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

  return {
    changeTabs,
    toggleShowLoginAlert
  };
};

export default GlobalActions;
