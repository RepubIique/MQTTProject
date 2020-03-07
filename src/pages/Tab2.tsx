import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import ProductCard from "../components/ProductCard";
import { cartOutline } from "ionicons/icons";

import { GlobalContext } from "../actions/globalContext";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Page</IonTitle>
          <IonButton className="cartIcon" href="/cart">
            <IonIcon icon={cartOutline}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent className="productContainer">
        <ProductCard />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
