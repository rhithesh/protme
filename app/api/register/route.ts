
import { NextResponse } from "next/server";
import { Resend } from 'resend';
import Welcome from "./Welcome"
const resend = new Resend("re_T9wrKr2S_4CZRZTNf5hMfrPijbifxDfVZ");
import prisma from "@/lib/db";



export async  function POST(req, res) {
    const body =await req.json()
    const min = 100; // Replace with your desired minimum value
    const max = 200; // Replace with your desired maximum value
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomInteger);

try{
 const {data,error}= await resend.emails.send({
      from: 'Hithesh <onboarding@hithesh.live>',
      to: ["rhithesh1947@gmail.com"],
      subject: `Hello ${body.email} ${randomInteger} `,
      react: Welcome() as React.ReactElement,
    });
    console.log(data,error)
}catch (error){
    console.log(error)
}
    //const cookieStore = await cookies()
    //cookieStore.set('name', 'lee')

  

  
    const user1 = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
            name: body.name,
            createdAt: new Date(),
            updatedAt: new Date(),
            verified:false,
            verificationCode:randomInteger,

        },
    });



   return NextResponse.json({ message: "Hello World" });
}


export async function PUT(req, res) {

    const body =await req.json()
    const data= await prisma.user.findUnique({
        where:{
            email:body.email
        }
    })
    if ( data?.verificationCode==body.verificationCode){
        await prisma.user.update({
            where: {
                email:body.email, // Field used to check if the record exists
              },
            data: {
                verified: true,
            },
        })

        return NextResponse.json({ message: "Hello World" });
    }
    const user = await prisma.user.update({
        where: {
            email:body.email, // Field used to check if the record exists
          },
        data: {
            verified: true,
        },
    });
    

    return NextResponse.json({ message: "failed" },{
        status: 400,
    });
}

