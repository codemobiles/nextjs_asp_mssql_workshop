import fetchInterceptor from "@/utils/fetchInterceptor";
import React from "react";

type Props = {};

export default async function ShopPage({}: Props) {
  const products = await fetchInterceptor.get("/product");

  return <div>ShopPage: {JSON.stringify(products)}</div>;
}
