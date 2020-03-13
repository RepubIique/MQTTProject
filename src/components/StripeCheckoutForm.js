import React, { useContext, useState } from "react";
import { IonButton, IonCard, IonCardContent } from "@ionic/react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { stripePaymentMethodHandler, storeOrder } from "../actions/api/payment";
import CardSection from "./StripePayCard";
import { GlobalContext } from "../actions/globalContext";
import GlobalActions from "../actions/globalActions";
import CartActions from "../actions/cartActions";
import { MQTTConnect } from "../actions/publish";

export default function CheckoutForm() {
  const {
    toggleShowPaymentLoading,
    toggleShowPaymentAlert,
    changePaymentStatus
  } = GlobalActions();
  const { clearCart, checkOut } = CartActions();
  const [state, setState] = useContext(GlobalContext);
  const { currentuser } = state;

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();
    //toggleShowPaymentLoading();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        // Include any additional collected billing details.
        name: currentuser.first_name + " " + currentuser.last_name
      }
    });

    stripePaymentMethodHandler(result).then(res => {
      if (res.error === null) {
        storeOrder(checkOut()).then(() => {
          clearCart();
          // MQTTConnect();
          toggleShowPaymentAlert(true);
        });
      } else {
        toggleShowPaymentAlert(false);
      }
    });
  };

  return (
    <IonCard>
      <IonCardContent>
        <CardSection />
        <IonButton expand="block" onClick={handleSubmit}>
          Pay
        </IonButton>
        <IonButton expand="block" onClick={MQTTConnect}>
          Open Door
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
}
