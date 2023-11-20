// http://localhost/examples/user/1
import React from "react";

type Props = {
  params: { slug: string[] };
};

export default function User({ params }: Props) {
  return (
    <div>
      <ul>
        {params.slug.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
