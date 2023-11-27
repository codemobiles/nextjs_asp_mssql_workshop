import StockEditForm from "@/app/_components/pages/stock/StockEditForm";
import { ProductData } from "@/models/product.model";
import { doGetStockById } from "@/services/serverService";
import React from "react";

type Props = { searchParams: { id: string } };

export default async function EditPage({ searchParams }: Props) {
  let product = {} as ProductData;

  if (searchParams.id) {
    product = await doGetStockById(searchParams.id);
  }
  return <StockEditForm product={product} />;
}
