// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
import { NextRequest } from "next/server";

interface RequestBody {
  name: string;
}

export async function POST(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const req = (await request.json()) as RequestBody;
  console.log(req);
  return Response.json(req);
}
