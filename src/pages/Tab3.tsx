import React from "react";
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
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SignUpForm />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
