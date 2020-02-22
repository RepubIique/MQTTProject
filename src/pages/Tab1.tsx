import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton
} from "@ionic/react";
import { qrCodeSharp } from "ionicons/icons";
import "./Tab1.css";
import Card from "../components/Card";
import Howitworks from "../components/HowitworksCard";

import { GlobalContext } from "../actions/globalContext";

import { BarcodeScanner } from "@ionic-native/barcode-scanner";

const Tab1: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(data.text);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NanoBox</IonTitle>
          <IonButton className="qrIcon" onClick={openScanner}>
            <IonIcon icon={qrCodeSharp}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Card />
        <Howitworks />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
