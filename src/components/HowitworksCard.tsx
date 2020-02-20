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
import { pin } from "ionicons/icons";

export const howitworks: React.FC = () => (
  <IonCard>
    <IonItem>
      <IonIcon icon={pin} slot="start" />
      <IonLabel>Step 1</IonLabel>
      <IonButton fill="outline" slot="end">
        View
      </IonButton>
    </IonItem>

    <IonCardContent>Scan QR code or enter unique machine number</IonCardContent>
    <IonItem>
      <IonIcon icon={pin} slot="start" />
      <IonLabel>Step 2</IonLabel>
      <IonButton fill="outline" slot="end">
        View
      </IonButton>
    </IonItem>

    <IonCardContent>Choose what products you would like to buy</IonCardContent>
    <IonItem>
      <IonIcon icon={pin} slot="start" />
      <IonLabel>Step 3</IonLabel>
      <IonButton fill="outline" slot="end">
        View
      </IonButton>
    </IonItem>

    <IonCardContent>Pay and checkout</IonCardContent>
  </IonCard>
);

export default howitworks;
