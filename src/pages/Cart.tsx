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
  IonCardTitle,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from "@ionic/react";
import { GlobalContext } from "../actions/globalContext";
import "./Cart.css";
import { closeCircleOutline } from "ionicons/icons";
import CartRemove from "../actions/cartRemove";

const Cart: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);
  let { cart } = state;
  const { removeItem } = CartRemove();
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
          <div>
            {cart.map(function(x: any) {
              return (
                <IonCard key={x.id}>
                  <IonRow>
                    <IonCol>
                      <img className="cartImg" src={x.image} />
                    </IonCol>
                    <IonCol className="textColumn">
                      <IonCardSubtitle>{x.name}</IonCardSubtitle>
                      <IonCardSubtitle>${x.price}.00</IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                      <IonButton
                        className="deleteIcon"
                        color="danger"
                        onClick={e => {
                          console.log("onclick:" + x.id);
                          removeItem(x.id);
                        }}
                      >
                        <IonIcon icon={closeCircleOutline}></IonIcon>
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCard>
              );
            })}
          </div>
        ) : (
          <IonCard>
            <IonCardContent>No Items</IonCardContent>
          </IonCard>
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
