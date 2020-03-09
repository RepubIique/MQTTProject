import React, { useContext, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonCardSubtitle,
  IonItem,
  IonCardContent,
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonRow,
  IonCol,
  IonGrid,
  IonButton
} from "@ionic/react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

import "./Account.css";

import { GlobalContext } from "../actions/globalContext";

const Account: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  const [selectedSegment, setSegment] = useState("signup");

  const { currentuser } = state;

  return (
    <IonPage>
      <IonHeader className="header">
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      {!currentuser ? (
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonSegment
                  onIonChange={e =>
                    setSegment(
                      selectedSegment === "signup" ? "login" : "signup"
                    )
                  }
                  value={selectedSegment}
                >
                  <IonSegmentButton value="signup">
                    <IonLabel>Sign up</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="login">
                    <IonLabel>Login</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonCol>
            </IonRow>
          </IonGrid>
          {selectedSegment === "signup" ? <SignUpForm /> : <LoginForm />}
        </IonContent>
      ) : (
        <IonContent>
          <IonCard className="card">
            <IonCardContent>
              <IonCardSubtitle>{`Welcome, ${currentuser.first_name +
                ` ` +
                currentuser.last_name}`}</IonCardSubtitle>
              <IonList>
                <IonItem>
                  <IonLabel>{`Username:  ${currentuser.username}`}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>{`Email:  ${currentuser.email}`}</IonLabel>
                </IonItem>
                {/* <IonItem>
                  <IonLabel>{`Registered On:  ${currentuser.created_on}`}</IonLabel>
                </IonItem> */}
              </IonList>
              <IonButton
                className="logoutButton"
                expand="block"
                color="danger"
                onClick={() => setState({ ...state, currentuser: null })}
              >
                Logout
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      )}
    </IonPage>
  );
};

export default Account;
