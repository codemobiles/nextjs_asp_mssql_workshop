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
  try {
    const { username, password } = body;

    if (username == "admin" && password == "1234") {
      return NextResponse.json({ result: "ok", token: "1234" });
    } else {
      return NextResponse.json({ result: "nok" });
    }
  } catch (error: any) {
    return NextResponse.json({ result: "nok" });
  }
}
