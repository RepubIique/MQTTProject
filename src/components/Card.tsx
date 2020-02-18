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
  <IonContent>
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>NanoBox</IonCardSubtitle>
        <IonCardTitle>Welcome !</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </IonCardContent>
    </IonCard>
  </IonContent>
);

export default CardExample;
