import { NextResponse } from "next/server";
import { prisma } from '@/helpers/db';

export async function PATCH(
  req: Request
) {
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
