
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers'

import { NextResponse } from 'next/server';
export  async function POST(req, res) {
    const prisma = new PrismaClient();
    const data = await req.json()
    console.log(data)
    const {email, password} = data
    console.log(email, password)
    const ans=    await prisma.user.findUnique({
                where: {
                    email: email,
                    password: password
              }})
    const cookieStore = await cookies()

    console.log(ans)

    cookieStore.set('Set-Cookie', `id=${ans.id}`)


    return NextResponse.json({ message: "Hello World" });


}