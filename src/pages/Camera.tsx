import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent
} from "@ionic/react";

import QrScanner from "../components/QrScanner";
const Camera = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Scan the QR code</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardContent>
            <QrScanner></QrScanner>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Camera;
