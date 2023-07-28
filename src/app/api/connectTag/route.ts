import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const pP = await prisma.projectTagsOnPersonalProject.createMany({
      data: [
        {
          projectId: "64c31484229b94e777f0afaa",
          projectTagsId: "64c3070e6a61b2cc7806ee4a",
        },
        {
          projectId: "64c31484229b94e777f0afaa",
          projectTagsId: "64c2fbcb40834aba1b0022e7",
        },
   
       
      ],
    });
    console.log("🚀 ~ file: route.ts:26 ~ GET ~ pP:", pP);
    return NextResponse.json({ message: pP }, { status: 200 });
  } catch (e) {
    console.log("🚀 ~ file: route.ts:28 ~ GET ~ e:", e);
    return NextResponse.json({ message: e }, { status: 200 });
  }
}
