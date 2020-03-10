const stripe = require("stripe")("sk_test_cupKvj0K2Ty0I3ZVar0Vk5PN00ioJfhbWc");

export default async (req, res) => {
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "aud",
      description: "pass in later",
      payment_method: id,
      confirm: true
    });

    console.log(payment);

    return res.status(200).json({
      confirm: "It is sent"
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Not happening"
    });
  }
};
