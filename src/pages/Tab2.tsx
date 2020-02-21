import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab2.css";
import ProductCard from "../components/ProductCard";

import { GlobalContext } from "../actions/globalContext";

const Tab2: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="productContainer">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
