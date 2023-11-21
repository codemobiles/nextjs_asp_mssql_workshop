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
  return NextResponse.json({ result: "ok" });
}
