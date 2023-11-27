import { ProductData } from "@/models/product.model";
import { Button } from "@mui/material";
import React from "react";

type Props = { product: ProductData };

export default function ProductCard({ product }: Props) {
  return <Button>{product.name}</Button>;
}
