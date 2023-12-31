import React from "react";
import { Metadata } from "next";
import LoginForm from "@/app/_components/pages/login/LoginForm";

export const metadata: Metadata = {
  title: "Login page",
  description: "Generated by create next app",
};

export default function LoginPage() {
  return <LoginForm />;
}
