import React, { useContext } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonItem,
  IonLabel,
  IonInput,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import SignUpForm from "../components/SignUpForm";

import "./Account.css";

import { GlobalContext } from "../actions/globalContext";

const Account: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <SignUpForm />
      </IonContent>
    </IonPage>
  );
};

export default Account;
