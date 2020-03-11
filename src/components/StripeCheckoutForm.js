import React from "react";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import CardSection from "./StripePayCard";
import CLIENTSECRET from "./stripe";

const CheckoutForm = ({ success }) => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async event => {
      event.preventDefault();
  
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
      });
  
      if (!error) {
        const { id } = paymentMethod;
  
        try {
          const { data } = await axios.post("/api/charge", { id, amount: 1099 });
          console.log(data);
          success();
        } catch (error) {
          console.log(error);
        }
      }
      render() 
        return (
          <form onSubmit={handleSubmit}>
            <CardSection />
            <button disabled={!this.props.stripe}>Confirm order</button>
          </form>
        );
      }
    };
  

 
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
