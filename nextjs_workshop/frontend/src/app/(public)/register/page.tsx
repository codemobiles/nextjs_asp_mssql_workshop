import React from "react";
import { Metadata } from "next";
import RegisterForm from "@/app/_components/pages/register/RegisterForm";

export const metadata: Metadata = {
  title: "Login page",
  description: "Generated by create next app",
};

export default function LoginPage() {
  return <RegisterForm />;
}
