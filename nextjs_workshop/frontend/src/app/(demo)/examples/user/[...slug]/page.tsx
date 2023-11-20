"use client";
// http://localhost/examples/user/1
import React from "react";

type Props = {
  params: { slug: string[] };
};

export default function User({ params }: Props) {
  console.log("Rendering  User");
  return (
    <div>
      <button
        onClick={() => {
          debugger;
          console.log("1234");
        }}
      >
        Click
      </button>
      <ul>
        {params.slug.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
