import React, { useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";
import MainLayout from "../../../components/layout/MainLayout";
import { Card } from "@chakra-ui/react";
import Button from "../../../components/button/Button";
import Header from "./Header";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51NjqQDHZSZP6SAwHtOGJd7sS4OhN7rQ0ZEZWHi1ogBbOtUgtkEnqJ0l4yeenbUV45pTWwfHrrjWCrLXcJ7TtKTs100bKLVhkQO"
    );
  }
  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const item = {
    price: "price_1NjqenHZSZP6SAwHT7jcaXI2",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/#/create-a-player/success`,
    cancelUrl: `${window.location.origin}/#/create-a-player/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <MainLayout header={<Header />}>
      <div>
        <Card className="h-48 w-96">
          Create a Player <br />
          $4.99
          <Button onClick={redirectToCheckout} disabled={isLoading}>
            {isLoading ? "Loading..." : "Checkout"}
          </Button>
        </Card>
        <Payment />
      </div>
    </MainLayout>
  );
};

export default Checkout;
