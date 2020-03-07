import React from "react";
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
  IonLabel
} from "@ionic/react";

export const CardExample: React.FC = () => (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>NanoBox</IonCardSubtitle>
      <IonCardTitle>Welcome !</IonCardTitle>
    </IonCardHeader>
    <img src="./assets/LandingPage.png" />

    <IonCardContent>Forget something ? Find it in our mini bar!</IonCardContent>
  </IonCard>
);

export default CardExample;
