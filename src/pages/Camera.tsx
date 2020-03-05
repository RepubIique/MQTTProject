import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import QrScanner from "../components/QrScanner";
const Camera = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Scan the QR code</IonTitle>
          </IonToolbar>
        </IonHeader>
        <QrScanner></QrScanner>
      </IonContent>
    </IonPage>
  );
};
export default Camera;
