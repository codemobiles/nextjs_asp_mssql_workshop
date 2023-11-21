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
  // http://localhost:3000/api/test/user
  return NextResponse.json({ result: "ok", route: context.params.route });
}
