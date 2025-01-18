import prisma from "@/lib/db";

export default function POST(req,res){

    const body =await req.json()
    const randomInteger = Math.floor(100000 + Math.random() * 900000)

    prisma.user.update({
        where: {
            email: body.email
        },
        data: {
            verificationCose: randomInteger
        }
    })

    return NextResponse.json({ message: "Updated Request sucessfully" });
}