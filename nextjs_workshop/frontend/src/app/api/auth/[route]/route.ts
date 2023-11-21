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
    return NextResponse.json({
      result: "ok",
      message: "login successfully",
      body,
    });
  }
}
