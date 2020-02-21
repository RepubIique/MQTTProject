import React, { useContext } from "react";
import { GlobalContext } from "../actions/globalContext";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle
} from "@ionic/react";
import { TextField } from './CustomInputFields';

import { getUsers, login } from "../actions/accounts";

import AccountsActions from "../actions/accountsActions";

export const SignUpForm: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  const { username, email, password, lastname, firstname } = state

  const { onInputChange } = AccountsActions();

  const submit = async () => {
    // const data = await getUsers();
    // if (data) {
    //   console.log(data)
    // }

    const data = await login({ username, password });
    if (data) {
      console.log(data);
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        {/*<IonCardSubtitle>Sign up here</IonCardSubtitle>
      <IonCardTitle>Sign up</IonCardTitle>*/}
      </IonCardHeader>
      <IonCardContent>
        <TextField mandatory={true} label={'Username'} fieldname={'username'} value={username} onChange={onInputChange} />
        <TextField mandatory={true} label={'Password'} fieldname={'password'} value={password} onChange={onInputChange} />
        <TextField mandatory={true} label={'First Name'} fieldname={'firstname'} value={firstname} onChange={onInputChange} />
        <TextField mandatory={true} label={'Last Name'} fieldname={'lastname'} value={lastname} onChange={onInputChange} />
        <TextField mandatory={true} label={'Email'} fieldname={'email'} value={email} onChange={onInputChange} />
        <IonButton expand="block" onClick={submit}>Sign Up</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default SignUpForm;
