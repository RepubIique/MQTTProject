import React, { useContext } from "react";
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
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Index from "./pages/Index";

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
import "./theme/variables.css";

/* Context */
import { GlobalProvider } from "./actions/globalContext";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <GlobalProvider>
          <IonPage>
            <Index />
          </IonPage>
        </GlobalProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
