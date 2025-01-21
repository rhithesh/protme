import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req:NextRequest, res) {
  try {
    // Parse the request body
    const body = await req.json();

    // Validate input fields
    const { userId, name, college, role, project ,email} = body;
    if (!userId || !name || !college || !role || !project) {
      return NextResponse.json({ error: "All fields are required." });
    }
    const da =await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    const upsertedData = await prisma.data.upsert({
      where: {
        userId:da?.id, // Ensure uniqueness by userId
      },
      update: {
        name,
        college,
        role,
        project,
      },
      create: {
        name,
        college,
        role,
        project,
        userId:da?.id as string,
      },
    });

    

    // Return the NextResponseult
     return NextResponse.json(upsertedData);
  } catch (error) {
    console.error("Error during upsert operation:", error);
    

    // Handle other unexpected errors
    return  NextResponse.json({ error: "An unexpected error occurred." });
  }
}
