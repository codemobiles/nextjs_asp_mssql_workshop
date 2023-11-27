import { ProductData } from "@/models/product.model";
import fetchInterceptor from "@/utils/fetchInterceptor";
import { Box } from "@mui/material";
import React from "react";

type Props = {};

export default async function ShopPage({}: Props) {
  const products = await fetchInterceptor.get("/product");

  return (
    <Box className="grid gap-2 grid-cols-fluid w-full">
      {products.map((p: ProductData) => (
        <ProductCard key={p.productId} product={p} />
      ))}
    </Box>
  );
}
