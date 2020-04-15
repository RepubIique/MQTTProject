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
  IonSpinner,
  IonAlert,
} from "@ionic/react";
import { GlobalContext } from "../actions/globalContext";
import "./Cart.css";
import { closeCircleOutline } from "ionicons/icons";
import CartActions from "../actions/cartActions";
import GlobalActions from "../actions/globalActions";

// Stripe Stuff
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutForm from "../components/StripeCheckoutForm";

const stripePromise = loadStripe("pk_test_nLp0TNh4V272938r4hYeX36U00Li5S8Vpr");

const Cart: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);
  const { removeItem } = CartActions();
  const { toggleShowPaymentAlert } = GlobalActions();
  const { cart, showPaymentLoading, showPaymentAlert, paymentSuccess } = state;
  const totalAmount = cart.reduce((a: any, b: any) => a + b.price, 0);
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
        <IonAlert
          isOpen={showPaymentAlert}
          onDidDismiss={() => {
            toggleShowPaymentAlert();
          }}
          header={"Payment Status"}
          subHeader={
            paymentSuccess
              ? `Your payment of $${totalAmount.toFixed(2)} is successful`
              : "Payment has failed. Please try again."
          }
          message={""}
          buttons={["OK"]}
        />
        <IonItemDivider>
          <IonRow>
            <IonCol>
              <IonLabel>Cart</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel className="totalPrice">
                Total: ${totalAmount}.00
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonItemDivider>

        {cart && cart.length > 0 ? (
          <div>
            {cart.map(function (x: any) {
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
                        onClick={(e) => {
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

        {/* {!showPaymentLoading ? (
                  ) : (
                    <IonSpinner name="crescent" />
                  )} */}
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      </IonContent>
    </IonPage>
  );
};
export default Cart;
