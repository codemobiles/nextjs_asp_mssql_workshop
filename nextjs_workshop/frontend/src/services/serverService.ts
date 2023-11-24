import { SignUp, SignIn, GetSession } from "../models/auth.model";
import fetchInterceptor from "../utils/fetchInterceptor";

type signProps = {
  username: string;
  password: string;
};

export const signUp = async (user: signProps): Promise<SignUp> => {
  const response = await fetchInterceptor.post("/auth/register", user);
  return response;
};

export const signIn = async (user: signProps): Promise<SignIn> => {
  const response = await fetchInterceptor.post("/auth/signin", user, {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
  });
  return response;
};

export async function signOut() {
  return await fetchInterceptor.get(`/auth/signout`, {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
  });
}

export const getSession = async (): Promise<GetSession> => {
  return await fetchInterceptor.get(`/auth/session`, {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
  });
};

export const getProducts = async (keyword?: string): Promise<Array<any>> => {
  if (keyword) {
    return await fetchInterceptor.get(`/product/search?keyword=${keyword}`);
  } else {
    return await fetchInterceptor.get(`/product`);
  }
};

export const doGetStockById = async (id: string) => {
  return await fetchInterceptor.get(`/product/${id}`);
};

export const addProduct = async (data: FormData): Promise<void> => {
  return await fetchInterceptor.post(`/product`, data);
};

export const editProduct = async (data: FormData): Promise<void> => {
  return await fetchInterceptor.put(`/product`, data);
};

export const deleteProduct = async (id?: string): Promise<void> => {
  await fetchInterceptor.del(`/product/${id}`);
};
