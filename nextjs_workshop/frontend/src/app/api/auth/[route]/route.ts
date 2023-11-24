import { ACCESS_TOKEN_KEY } from "@/utils/constant";
import fetchInterceptor from "@/utils/fetchInterceptor";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

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

async function signin(body: {
  username: string;
  password: string;
}): Promise<any> {
  // try {
  //   const { username, password } = body;

  //   if (username == "admin" && password == "1234") {
  //     return NextResponse.json({ result: "ok", token: "1234" });
  //   } else {
  //     return NextResponse.json({ result: "nok" });
  //   }
  // } catch (error: any) {
  //   return NextResponse.json({ result: "nok" });
  // }

  try {
    const response = await fetchInterceptor.post(`/auth/login`, body);
    const { token } = response;
    console.log("Debug Token: " + token);
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
