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
import "./Home.css";
import Card from "../components/Card";
import Howitworks from "../components/HowitworksCard";

import { GlobalContext } from "../actions/globalContext";

const Home: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nanobar</IonTitle>
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

export default Home;
