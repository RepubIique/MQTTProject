import React, { useContext, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonAlert
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Checkout.css";
import ProductCard from "../components/ProductCard";
import { cartOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

import { GlobalContext } from "../actions/globalContext";
import GlobalActions from "../actions/globalActions";

const Checkout: React.FC = props => {
  const [state, setState] = useContext(GlobalContext);
  const { toggleShowLoginAlert } = GlobalActions();
  const { showLoginAlert } = state;

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
        <IonAlert
          isOpen={showLoginAlert}
          onDidDismiss={() => {
            toggleShowLoginAlert();
            //history.push("/login");
          }}
          header={"Login required"}
          subHeader={
            "You will need to login first before adding items to cart."
          }
          message={""}
          buttons={["OK"]}
        />
        <ProductCard />
      </IonContent>
    </IonPage>
  );
};

export default Checkout;
