import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const pP = await prisma.isaac.create({
      data: {
        cv: "https://firebasestorage.googleapis.com/v0/b/portfolio-7dba7.appspot.com/o/IsaacOJO.pdf?alt=media&token=0a38472e-18f1-4cbe-b17f-16b6f0e4f381",
      },
    });
    console.log("🚀 ~ file: route.ts:26 ~ GET ~ pP:", pP);
    return NextResponse.json({ message: pP }, { status: 200 });
  } catch (e) {
    console.log("🚀 ~ file: route.ts:28 ~ GET ~ e:", e);
    return NextResponse.json({ message: e }, { status: 200 });
  }
}
