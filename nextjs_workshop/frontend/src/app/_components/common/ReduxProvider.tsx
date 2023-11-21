import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: Props) {
  return <div>{children}</div>;
}