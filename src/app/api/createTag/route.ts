import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const pP = await prisma.projectTags.createMany({
      data: [
        {
          title: "Html",
        },
        {
          title: "Css",
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
