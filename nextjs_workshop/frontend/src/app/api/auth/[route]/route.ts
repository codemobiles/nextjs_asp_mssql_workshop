import { signOut } from "@/services/serverService";
import { ACCESS_TOKEN_KEY } from "@/utils/constant";
import fetchInterceptor from "@/utils/fetchInterceptor";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// GET
export async function GET(
  request: NextRequest,
  context: {
    params: {
      route: string;
    };
  }
): Promise<any> {
  const route = context.params.route;

  if (route === "signout") {
    return signout(request);
  } else if (route === "session") {
    return getSession(request);
  }
  return NextResponse.json({ route });
}

// POST
export async function POST(
  request: NextRequest,
  context: {
    params: {
      route: string;
    };
  }
): Promise<any> {
  const route = context.params.route;
  const body = await request.json();
  if (route === "signin") {
    return signin(body);
  }
}

function signout(request: NextRequest) {
  const cookieStore = cookies();
  cookieStore.delete(ACCESS_TOKEN_KEY);
  return NextResponse.json({ result: "ok" });
}

async function getSession(req: NextRequest) {
  try {
    const response = await fetchInterceptor.get("/auth/gesession");
    return NextResponse.json(response);
  } catch (error) {
    console.log("response: " + error);
    return NextResponse.json({ result: "nok" });
  }
}

async function signin(body: {
  username: string;
  password: string;
}): Promise<any> {
  try {
    const response = await fetchInterceptor.post(`/auth/login`, body);
    const { token } = response;

    cookies().set(ACCESS_TOKEN_KEY, token, {
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json({ result: "nok" });
  }
}
