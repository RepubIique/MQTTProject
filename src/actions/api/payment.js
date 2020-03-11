import { fetcher } from "./index";
const stripe = require("stripe")("sk_test_cupKvj0K2Ty0I3ZVar0Vk5PN00ioJfhbWc");

export const stripePaymentMethodHandler = async result => {
  console.log("StripePaymentHandler called");
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
    handleServerResponse(paymentResponse);
  }
};

export const handleServerResponse = async response => {
  console.log("handleServerResponse called");
  console.log("Payment response", response);
  if (response.error) {
    // Show error from server on payment form
  } else if (response.requires_action) {
    // Use Stripe.js to handle the required card action
    const { error: errorAction, paymentIntent } = await stripe.handleCardAction(
      response.payment_intent_client_secret
    );

    if (errorAction) {
      // Show error from Stripe.js in payment form
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
    // Show success message
  }
};
