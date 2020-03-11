import React, { useContext } from "react";
import { IonButton, IonCard, IonCardContent } from "@ionic/react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { stripePaymentMethodHandler } from "../actions/api/payment";
import CardSection from "./StripeCardSection";
import { GlobalContext } from "../actions/globalContext";
import GlobalActions from "../actions/globalActions";

export default function CheckoutForm() {
  const { toggleShowPaymentLoading } = GlobalActions();
  const [state, setState] = useContext(GlobalContext);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();
    toggleShowPaymentLoading();

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
        name: "Jenny Rosen"
      }
    });

    stripePaymentMethodHandler(result).then(res => {
      if (!res.error) {
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
      </IonCardContent>
    </IonCard>
  );
}
