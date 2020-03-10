import React, { useState, useContext } from "react";
import { GlobalContext } from "../actions/globalContext";
import "./SignUpForm.css";
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
import { getUsers, createUser } from "../actions/api/accounts";
import { isEmpty } from "../util";

export const SignUpForm: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: ""
  });

  const onInputChange = (obj: any) => {
    setForm({ ...form, [obj.key]: obj.value });
  };

  const submit = async () => {
    const data = await createUser({
      username,
      password,
      firstname,
      lastname,
      email
    });
    if (data && !isEmpty(data.results)) {
      setState({ ...state, currentuser: data.results });
    }
  };

  const { username, email, password, lastname, firstname } = form;

  return (
    <IonCard className="card">
      <IonCardContent>
        <IonItem>
          <IonLabel position="floating">
            Username{<span style={{ color: "red" }}> * </span>}
          </IonLabel>
          <IonInput
            value={username}
            onIonChange={e => {
              onInputChange({ key: "username", value: e.detail.value });
            }}
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
            Password{<span style={{ color: "red" }}> * </span>}
          </IonLabel>
          <IonInput
            value={password}
            onIonChange={e => {
              onInputChange({ key: "password", value: e.detail.value });
            }}
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
            First Name{<span style={{ color: "red" }}> * </span>}
          </IonLabel>
          <IonInput
            value={firstname}
            onIonChange={e => {
              onInputChange({ key: "firstname", value: e.detail.value });
            }}
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
            Last Name{<span style={{ color: "red" }}> * </span>}
          </IonLabel>
          <IonInput
            value={lastname}
            onIonChange={e => {
              onInputChange({ key: "lastname", value: e.detail.value });
            }}
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
            Email{<span style={{ color: "red" }}> * </span>}
          </IonLabel>
          <IonInput
            value={email}
            onIonChange={e => {
              onInputChange({ key: "email", value: e.detail.value });
            }}
            required
          ></IonInput>
        </IonItem>
        <section>
          <IonButton className="signUpButton" expand="block" onClick={submit}>
            Sign Up
          </IonButton>
        </section>
      </IonCardContent>
    </IonCard>
  );
};

export default SignUpForm;
