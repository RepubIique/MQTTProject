import { useContext } from "react";
import { GlobalContext } from "./globalContext";

const AccountsActions = () => {
  const [state, setState] = useContext(GlobalContext);

  function onInputChange(data) {
    setState(state => ({ ...state, [data.key]: data.value }));
    console.log("acc", state);
  }

  return {
    onInputChange
  };
};

export default AccountsActions;
