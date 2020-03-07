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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from "@ionic/react";
import { GlobalContext } from "../actions/globalContext";

const Cart: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);
  let { cart } = state;
  let array = [1, 2, 3, 4];
  return (
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

        {cart && cart.length > 0 ? (
          <IonContent>
            {cart.map(function(x: any) {
              return (
                <IonCard key={x.id}>
                  <IonCardHeader>
                    <IonCardSubtitle>{x.name}</IonCardSubtitle>
                    <IonCardTitle></IonCardTitle>
                  </IonCardHeader>
                  <img src={x.image} />
                  <IonCardContent>
                    Some Description about the item
                  </IonCardContent>
                </IonCard>
              );
            })}
          </IonContent>
        ) : (
          <IonContent>
            <IonCard>
              <IonCardContent>No Items</IonCardContent>
            </IonCard>
          </IonContent>
        )}

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
  );
};
export default Cart;
