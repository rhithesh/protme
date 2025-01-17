
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers'
import { Resend } from 'resend';
import Welcome from "./Welcome"
const resend = new Resend("re_T9wrKr2S_4CZRZTNf5hMfrPijbifxDfVZ");



export async  function POST(req, res) {
    const body =await req.json()
    const prisma = new PrismaClient();

    
const min = 100; // Replace with your desired minimum value
const max = 200; // Replace with your desired maximum value
const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInteger);

try{


 const {data,error}= await resend.emails.send({
      from: 'Hithesh <onboarding@hithesh.live>',
      to: [body.email],
      subject: `Hello ${body.email} ${randomInteger} `,
      react: Welcome() as React.ReactElement,
    });
    console.log(data,error)
}catch (error){
    console.log(error)
}
    //const cookieStore = await cookies()
    //cookieStore.set('name', 'lee')
  
    const user = await prisma.user.upsert({
        where: {
            email:"rhithesh1947@gmail.com", // Field used to check if the record exists
          },
        create: {
            email: body.email,
            password: body.password,
            name: body.name,
            createdAt: new Date(),
            updatedAt: new Date(),
            verified:false,
            verificationCose:randomInteger,

        },
        update:{

        }
    });



   return NextResponse.json({ message: "Hello World" });
}