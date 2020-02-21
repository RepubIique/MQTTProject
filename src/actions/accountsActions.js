import { useContext } from "react";
import { GlobalContext } from "./globalContext";

const AccountsActions = () => {
  const [state, setState] = useContext(GlobalContext);

  function onInputChange(data) {
    setState(state => ({ ...state, [data.key]: data.value }));
  }

  return {
    onInputChange
  };
};

export default AccountsActions;
