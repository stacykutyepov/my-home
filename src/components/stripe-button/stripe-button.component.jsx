import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PublishableKey =
    "pk_test_51GxbD6CPkGiU0icwpgyYajf4zfxFD3RLulvdIet7ZQI7YGqmE2i5tSkVVMhkByVA87u5IvGayNiwtOx95ek2ixvk00EHh7BXQ8";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishableKey}
    />
  );
};

export default StripeCheckoutButton;
