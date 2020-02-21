import React, { useState, useContext } from "react";
import { GlobalContext } from "../actions/globalContext";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput
} from "@ionic/react";

import { getUsers, login } from "../actions/accounts";

import AccountsActions from "../actions/accountsActions";

export const SignUpForm: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

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

  const { username, email, password, lastname, firstname } = state;

  return (
    <IonCard>
      <IonCardHeader>
        {/*<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      <IonCardTitle>Sign up</IonCardTitle>*/}
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonLabel position="stacked">
            Username{<span style={{ color: "red" }}> * </span>}
          </IonLabel>
          <IonInput
            value={username}
            onIonChange={e => {
              console.log("Enter", e);
              onInputChange({ key: "username", value: e.detail.value });
            }}
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">
            Password{<span style={{ color: "red" }}> * </span>}
          </IonLabel>
          <IonInput
            value={password}
            onIonChange={e => {
              console.log("Enter", e);
              onInputChange({ key: "password", value: e.detail.value });
            }}
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">
            First Name{<span style={{ color: "red" }}> * </span>}
          </IonLabel>
          <IonInput
            value={firstname}
            onIonChange={e => {
              console.log("Enter", e);
              onInputChange({ key: "firstname", value: e.detail.value });
            }}
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">
            Last Name{<span style={{ color: "red" }}> * </span>}
          </IonLabel>
          <IonInput
            value={lastname}
            onIonChange={e => {
              console.log("Enter", e);
              onInputChange({ key: "lastname", value: e.detail.value });
            }}
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">
            Email{<span style={{ color: "red" }}> * </span>}
          </IonLabel>
          <IonInput
            value={email}
            onIonChange={e => {
              console.log("Enter", e);
              onInputChange({ key: "email", value: e.detail.value });
            }}
            required
          ></IonInput>
        </IonItem>
        <section>
          <IonButton expand="block" onClick={submit}>
            Sign Up
          </IonButton>
        </section>
      </IonCardContent>
    </IonCard>
  );
};

export default SignUpForm;
