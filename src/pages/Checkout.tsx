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
import "./Checkout.css";
import ProductCard from "../components/ProductCard";
import { cartOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

import { GlobalContext } from "../actions/globalContext";

const Checkout: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Page</IonTitle>
          <Link to="/cart">
            <IonButton className="cartIcon">
              <IonIcon icon={cartOutline}></IonIcon>
            </IonButton>
          </Link>
        </IonToolbar>
      </IonHeader>

      <IonContent className="productContainer">
        <ProductCard />
      </IonContent>
    </IonPage>
  );
};

export default Checkout;
