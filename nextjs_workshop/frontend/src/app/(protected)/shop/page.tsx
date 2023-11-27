import fetchInterceptor from "@/utils/fetchInterceptor";
import React from "react";

type Props = {};

export default function ShopPage({}: Props) {
  const products = fetchInterceptor.get("/product");

  return <div>ShopPage</div>;
}
