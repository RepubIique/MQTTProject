import React, { useContext, useState, useEffect } from "react";
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
  IonButton,
  IonItemDivider,
  useIonViewDidEnter
} from "@ionic/react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

import "./Account.css";
import "../components/ProductCard.css";

import { GlobalContext } from "../actions/globalContext";
import { getOrdersByUserId } from "../actions/api/products";

const Account: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  const [selectedSegment, setSegment] = useState("signup");

  const { currentuser, orderHistory } = state;

  const getOrders = async () => {
    let { id } = currentuser;
    const data = await getOrdersByUserId({ id });
    if (data) {
      setState({ ...state, orderHistory: data.results });
    }
  };

  useEffect(() => {
    if (currentuser) getOrders();
  }, [currentuser]);

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
          <IonItemDivider>
            <IonLabel>Order History</IonLabel>
          </IonItemDivider>
          {orderHistory.map((x: any) => (
            <IonCard className="card">
              <IonCardContent>
                <img className="productImg" src={x.image_url}></img>
                <div className="priceName">
                  <IonCardTitle className="priceSize">
                    ${x.price.toFixed(2)}
                  </IonCardTitle>
                  <h4 className="productName">{x.name}</h4>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </IonContent>
      )}
    </IonPage>
  );
};

export default Account;
