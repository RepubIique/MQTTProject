import React, { useContext } from "react";
import {
  IonPage,
  IonBackButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonItemDivider,
  IonCard
} from "@ionic/react";
import { GlobalContext } from "../actions/globalContext";

const Cart: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tab2" />
            </IonButtons>
            <IonTitle>Nanobar</IonTitle>
          </IonToolbar>
          <IonItemDivider>
            <IonLabel>Cart</IonLabel>
          </IonItemDivider>

          {state.cart.forEach((e: any) => {
            console.log("this:" + e.name);
            return <div>{e.name}</div>;
          })}

          <IonItemDivider>
            <IonLabel>Pay With Card</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput placeholder="Name on Card"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput placeholder="send@receipt.com"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Credit Card Info</IonLabel>
            <IonInput placeholder="xxxx-xxxx-xxxx-xxxx"></IonInput>
            <IonInput placeholder="MM/YY"></IonInput>
            <IonInput placeholder="CVC"></IonInput>
          </IonItem>
        </IonHeader>
      </IonPage>
    </div>
  );
};
export default Cart;
