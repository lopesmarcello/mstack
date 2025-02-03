// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const req = request.json();
  return Response.json(req);
}
