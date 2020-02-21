import React, { useContext } from "react";
import { GlobalContext } from "../actions/globalContext";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle
} from "@ionic/react";
import { isEmptyString } from '../utils/utils'
import { TextField } from './CustomInputFields';

import { getUsers, login } from "../actions/accounts";

import AccountsActions from "../actions/accountsActions";

export const SignUpForm: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  const { username, email, password, lastname, firstname, errors } = state

  const { onInputChange } = AccountsActions();

  const submit = async () => {
    // const data = await getUsers();
    // if (data) {
    //   console.log(data)
    // }
    if (!validate()) {
      const data = await login({ username, password });
      if (data) {
        console.log(data);
      }
    } else {
      console.log('Something is missing')
    }

  };

  const validate = () => {
    let errors = false
    if (isEmptyString(username) ||
      isEmptyString(email) ||
      isEmptyString(password) ||
      isEmptyString(lastname) ||
      isEmptyString(firstname)) errors = true
    return errors;
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
        <IonButton expand="block" onClick={submit} disabled={errors}>Sign Up</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default SignUpForm;
