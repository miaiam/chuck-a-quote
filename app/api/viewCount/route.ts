import { NextResponse } from "next/server";
import { prisma } from '@/helpers/db';

export type ResponseBody = {message: string, viewCount: number}

export async function PATCH(
  req: Request
): Promise<NextResponse<ResponseBody>> {
  const { id } = await req.json();

  const viewCount = await prisma.pageVisits.update({
    where: {
      id: id,
    },
    data: {
      views: {increment: 1},
    },
  });

  return NextResponse.json({ message: "Updated", viewCount: viewCount?.views || 0 }, { status: 200 });
}
