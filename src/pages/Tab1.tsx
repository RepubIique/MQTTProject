import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab1.css";
import Card from "../components/Card";
import Howitworks from "../components/HowitworksCard";

import { GlobalContext } from "../actions/globalContext";

const Tab1: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NanoBox</IonTitle>
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
