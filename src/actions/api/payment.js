import React, { useContext, useState } from "react";
import { fetcher } from "./index";

const stripe = require("stripe")("sk_test_cupKvj0K2Ty0I3ZVar0Vk5PN00ioJfhbWc");

export const stripePaymentMethodHandler = async result => {
  console.log("StripePaymentHandler called");
  let obj = null;
  if (result.error) {
    // Show error in payment form
  } else {
    // Otherwise send paymentMethod.id to your server (see Step 4)
    const paymentResponse = await fetcher()
      .post(
        "/api/pay",
        JSON.stringify({
          payment_method_id: result.paymentMethod.id
        })
      )
      .then(response => response.data)
      .catch(err => console.log("Error", err));

    // Handle server response (see Step 4)
    obj = handleServerResponse(paymentResponse);
  }
  return obj;
};

export const handleServerResponse = async response => {
  console.log("handleServerResponse called");
  console.log("Payment response", response);
  if (response.error) {
    return { msg: "Error", error: response.error };
  } else if (response.requires_action) {
    // Use Stripe.js to handle the required card action

    // stripe.handleCardAction return type error is not a function
    const { error: errorAction, paymentIntent } = await stripe.handleCardAction(
      response.payment_intent_client_secret
    );

    if (errorAction) {
      return { msg: "Error@Authentication", error: errorAction };
    } else {
      // The card action has been handled
      // The PaymentIntent can be confirmed again on the server
      const serverResponse = await fetcher()
        .post(
          "/api/pay",
          JSON.stringify({
            payment_intent_id: paymentIntent.id
          })
        )
        .then(response => response.data)
        .catch(err => console.log("Error", err));

      handleServerResponse(await serverResponse.json());
    }
  } else {
    return { msg: "Payment successful", error: null, response };
  }
};

export const storeOrder = async data => {
  const result = await fetcher()
    .post("/api/storeorder", JSON.stringify(data))
    .then(response => response.data)
    .catch(err => console.log("Error", err));
};
