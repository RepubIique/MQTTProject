import React, { useContext } from "react";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { personOutline, cartOutline, homeOutline } from "ionicons/icons";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

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
        <Route path="/tab1" component={Tab1} exact={true} />
        <Route path="/tab2" component={Tab2} exact={true} />
        <Route path="/tab3" component={Tab3} />
        <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton
          tab="tab1"
          href="/tab1"
          onClick={() => changeTabs("tab1")}
        >
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="tab2"
          href="/tab2"
          onClick={() => changeTabs("tab2")}
        >
          <IonIcon icon={cartOutline} />
          <IonLabel>Checkout</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="tab3"
          href="/tab3"
          onClick={() => changeTabs("tab3")}
        >
          <IonIcon icon={personOutline} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Index;
