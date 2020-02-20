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
    {
      <img src="https://images.unsplash.com/photo-1582032224511-d6a8a1d21c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
    }

    <IonCardContent>
      Keep close to Nature's heart... and break clear away, once in awhile, and
      climb a mountain or spend a week in the woods. Wash your spirit clean.
    </IonCardContent>
  </IonCard>
);

export default CardExample;
