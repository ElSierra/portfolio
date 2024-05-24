import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  const projectId = "6650bd42ae35e2f4461774a0";
  const cv = await prisma.projectTagsOnPersonalProject.createMany({
    data: [
      {
        projectId,
        projectTagsId: "64c3068f6a61b2cc7806ee47",
      },
      {
        projectId,
        projectTagsId: "64c2fbcb40834aba1b0022e7",

      },
      {
        projectId,
        projectTagsId: "64c3070e6a61b2cc7806ee4a",
      },
    ],
  });

  return NextResponse.json({ message: "Hello, World!"});
}
