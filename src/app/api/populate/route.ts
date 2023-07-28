import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const pP = await prisma.personalProjects.createMany({
      data: [
        {
          title: "My Portfolio",
          subtitle: "Next.js",
          imageUri:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-7dba7.appspot.com/o/portfolio.png?alt=media&token=ccd3dab2-eef6-4a01-af71-b0b5938ef73e",
          sourceCode: "https://github.com/ElSierra/portfolio",
          desc: "Coded By Me, Ojo Isaac Iyanuoluwa",
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
