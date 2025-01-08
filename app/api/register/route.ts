
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers'

export async  function POST(req, res) {
    const data =await req.json()
    const prisma = new PrismaClient();
    const cookieStore = await cookies()
 
    cookieStore.set('name', 'lee')
  
    const user = await prisma.user.create({
        data: {
            email: data.email,
            password: data.password,
            name: data.name,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    });
    console.log(user)



   return NextResponse.json({ message: "Hello World" });
}