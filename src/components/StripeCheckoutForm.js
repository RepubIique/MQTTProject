import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import "./stripe";

import CardSection from "./StripePayCard";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
    console.log(paymentMethod);
    // if (!error) {
    //   const { id } = paymentMethod;

    //   try {
    //     const { data } = await axios.post("/api/checkout", {
    //       id,
    //       amount: 1099
    //     });
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe}>Confirm order</button>
    </form>
  );
}
