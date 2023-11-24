"use client";
import React, { useEffect } from "react";
import { store, useAppDispatch } from "@/store/store";
import { getSession, userSelector } from "@/store/slices/userSlice";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";

type Props = {};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const userReducer = useSelector(userSelector);
  useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  return <>{children}</>;
}
