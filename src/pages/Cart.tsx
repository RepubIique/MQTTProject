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
  IonIcon,
  IonListHeader
} from "@ionic/react";
import { GlobalContext } from "../actions/globalContext";
import "./Cart.css";
import { closeCircleOutline } from "ionicons/icons";
import CartActions from "../actions/cartActions";

// Stripe Stuff
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/StripeCheckoutForm";

const stripePromise = loadStripe("pk_test_nLp0TNh4V272938r4hYeX36U00Li5S8Vpr");

const Cart: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);
  const { removeItem } = CartActions();
  const { cart } = state;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Nanobar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCardSubtitle>
          <IonRow>
            <IonCol>
              <IonLabel>Cart</IonLabel>
            </IonCol>
            <IonCol>
              {cart && cart.length > 0 ? (
                <div>
                  {cart.map(function(y: any) {
                    return (
                      <IonLabel className="totalPrice" key={y.id}>
                        Total: ${y.price}.00
                      </IonLabel>
                    );
                  })}
                </div>
              ) : (
                <IonLabel className="totalPrice">Cart Empty</IonLabel>
              )}
            </IonCol>
          </IonRow>
        </IonCardSubtitle>

        {cart && cart.length > 0 ? (
          <div>
            {cart.map(function(x: any) {
              return (
                <IonCard key={x.id}>
                  <IonRow>
                    <IonCol>
                      <img className="cartImg" src={x.image_url} />
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

        {/* <IonItem>
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
        </IonItem> */}

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </IonContent>
    </IonPage>
  );
};
export default Cart;
