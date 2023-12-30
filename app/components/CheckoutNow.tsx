"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToCart";

const CheckoutNow = ({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();
  const buyNow = (priceId: string) => {
    checkoutSingleItem(priceId);
  };
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return <Button onClick={() => buyNow(product.price_id)}>Buy Now</Button>;
};

export default CheckoutNow;
