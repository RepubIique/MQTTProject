import React, { useContext, useState } from "react";

// DO NOT REMOVE THIS LINE OF CODE- IT DOESNT PROVIDE A FUNCTION BUT IT STOPS WORKING IF YOU REMOVE IT
import mqtt from "mqtt";

import ReactLoading, { cylon } from "react-loading";
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
    changePaymentStatus,
  } = GlobalActions();
  const { clearCart, checkOut, noUse } = CartActions();
  const [state, setState] = useContext(GlobalContext);
  const { currentuser, loading } = state;

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // event.preventDefault();
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
        name: currentuser.first_name + " " + currentuser.last_name,
        email: currentuser.email,
      },
    });

    stripePaymentMethodHandler(result).then((res) => {
      let obj = checkOut();
      if (res.error === null) {
        storeOrder(obj).then(() => {
          clearCart();
          MQTTConnect(obj.cart);
          toggleShowPaymentAlert(true);
        });
      } else {
        toggleShowPaymentAlert(false);
      }
    });
  };

  const loadingIcon = () => {
    setState({ ...state, loading: true });

    setTimeout(() => {
      setState({ ...state, loading: false });
    }, 5000);
  };

  return (
    <IonCard>
      <IonCardContent>
        <CardSection />
        <IonButton
          expand="block"
          onClick={() => {
            handleSubmit();
            loadingIcon();
          }}
          disabled={loading}
        >
          {loading && <ReactLoading type={cylon}></ReactLoading>}
          {!loading && <span>Pay</span>}
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
}
