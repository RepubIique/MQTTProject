import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import SignUpForm from "../components/SignUpForm";

import "./Tab3.css";

import { GlobalContext } from "../actions/globalContext";

const Tab3: React.FC = () => {
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

export default Tab3;
