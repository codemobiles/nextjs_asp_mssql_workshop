import React from "react";

type Props = { searchParams: { id: string } };

export default function EditPage({ searchParams }: Props) {
  return <div>EditPage {searchParams.id}</div>;
}
