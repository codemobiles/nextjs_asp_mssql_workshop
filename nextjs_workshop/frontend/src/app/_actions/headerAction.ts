"use server";
import { ACCESS_TOKEN_KEY } from "@/src/utils/constant";
import { cookies } from "next/headers";

export async function getTokenFromCookie() {
  const cookieStore = cookies();
  const accessTokenKey = cookieStore.get(ACCESS_TOKEN_KEY);
  return accessTokenKey?.value;
}
