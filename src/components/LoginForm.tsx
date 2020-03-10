import React, { useState, useContext } from "react";
import { GlobalContext } from "../actions/globalContext";
import "./LoginForm.css";
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
import { getUsers, login } from "../actions/api/accounts";
import AccountsActions from "../actions/accountsActions";
import { isEmpty } from "../util";

export const LoginForm: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const onInputChange = (obj: any) => {
    setForm({ ...form, [obj.key]: obj.value });
  };

  const submit = async () => {
    const data = await login({ username, password });
    if (data && !isEmpty(data.results)) {
      setState({ ...state, currentuser: data.results });
    }
  };

  const { username, password } = form;

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
        <section>
          <IonButton className="loginButton" expand="block" onClick={submit}>
            Login
          </IonButton>
        </section>
      </IonCardContent>
    </IonCard>
  );
};

export default LoginForm;
