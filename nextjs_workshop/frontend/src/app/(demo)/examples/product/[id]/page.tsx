import React from "react";

type Props = {
  params: { id: string };
  searchParams: { type: string };
};

export default function Product({ params, searchParams }: Props) {
  return (
    <div>
      Product ID: {params.id}: Type: {searchParams.type}
    </div>
  );
}
