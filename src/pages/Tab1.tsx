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

import Tab2 from "./Tab2";
import Camera from "./Camera";

import { GlobalContext } from "../actions/globalContext";

const Tab1: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NanoBox</IonTitle>
          <IonButton className="qrIcon" href="/camera">
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
