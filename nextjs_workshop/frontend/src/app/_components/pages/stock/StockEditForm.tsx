import { ProductData } from "@/models/product.model";
import React from "react";

type Props = { product: ProductData };

export default function StockEditForm({ product }: Props) {
  return <div>StockEditForm {JSON.stringify(product)}</div>;
}
