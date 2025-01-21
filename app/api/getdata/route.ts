import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest) {
    const cookieStore = await cookies()
    const id = cookieStore.get("Protme-auth")
    if (!id) {
        return NextResponse.json({ error: "You are not logged in." });
    }
    const prisma = new PrismaClient();
    const data = await prisma.data.findUnique({
        where: {
            userId:id as unknown as string,
        },
    });
    return NextResponse.json(data);
}