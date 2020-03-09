import React, { useContext } from "react";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { personOutline, cartOutline, homeOutline } from "ionicons/icons";
import Home from "./Home";
import Checkout from "./Checkout";
import Account from "./Account";
import Camera from "./Camera";
import Cart from "./Cart";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "../theme/variables.css";

/* Context */
import { GlobalContext } from "../actions/globalContext";

import GlobalActions from "../actions/globalActions";

const Index: React.FC = () => {
  defineCustomElements(window);
  const [state, setState] = useContext(GlobalContext);
  const { changeTabs } = GlobalActions();
  console.log("App", state);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/checkout" component={Checkout} exact={true} />
        <Route path="/account" component={Account} />
        <Route path="/camera" component={Camera} />
        <Route path="/cart" component={Cart} />
        <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton
          tab="home"
          href="/home"
          onClick={() => changeTabs("home")}
        >
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="checkout"
          href="/checkout"
          onClick={() => changeTabs("checkout")}
        >
          <IonIcon icon={cartOutline} />
          <IonLabel>Checkout</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="account"
          href="/account"
          onClick={() => changeTabs("account")}
        >
          <IonIcon icon={personOutline} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Index;
