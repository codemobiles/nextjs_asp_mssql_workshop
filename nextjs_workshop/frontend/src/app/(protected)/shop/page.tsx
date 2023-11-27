// import fetchInterceptor from "@/utils/fetchInterceptor";
// import React from "react";

// type Props = {};

// export default async function ShopPage({}: Props) {
//   const products = await fetchInterceptor.get("/product");

//   return <div>ShopPage: {JSON.stringify(products)}</div>;
// }

"use client";
import fetchInterceptor from "@/utils/fetchInterceptor";
import React, { useEffect } from "react";

type Props = {};

export default function ShopPage({}: Props) {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    load();
  });

  async function load() {
    const result = await fetchInterceptor.get("/product");
    setProducts(result);
  }

  return <div>ShopPage: {JSON.stringify(products)}</div>;
}
