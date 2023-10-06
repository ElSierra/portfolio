import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  const cv = await prisma.isaac.findFirst({
    where: {
      id: "64c316dc229b94e777f0afb0",
    },
  });

  return NextResponse.redirect(cv?.cv as string);
}
