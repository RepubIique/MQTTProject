const stripe = require("stripe")("sk_test_cupKvj0K2Ty0I3ZVar0Vk5PN00ioJfhbWc");

const getPaymentIntent = async amount => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "aud",
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: "accept_a_payment" }
  });
  console.log(paymentIntent.client_secret);

  return paymentIntent.client_secret;
};

export default getPaymentIntent;
