import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import Welcome from './Welcome';
const resend = new Resend('re_T9wrKr2S_4CZRZTNf5hMfrPijbifxDfVZ');
import prisma from '@/lib/db';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const min = 100;
  const max = 200;
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomInteger, 'Hithesh');

  try {
    const { data, error } = await resend.emails.send({
      from: 'Hithesh <onboarding@hithesh.live>',
      to: 'rhithesh1947@gmail.com',
      subject: `Hello ${body.email} ${randomInteger} `,
      react: Welcome() as React.ReactElement,
    });
    console.log(data, error);
  } catch (error) {
    console.log(error);
  }
  //const cookieStore = await cookies()
  //cookieStore.set('name', 'lee')
  console.log(body.email);

  try {
    console.log(await prisma.user.findMany({}));
    await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
        createdAt: new Date(),
        updatedAt: new Date(),
        verified: false,
        verificationCode: 123,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error, message: 'failed', user: 'User Aldready Created' },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: 'User Created enter Otp to proceed' });
}

export async function PUT(req: NextRequest) {
  const cookieStore = await cookies();

  const body = await req.json();
  const data = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (data?.verificationCode == body.verificationCode) {
    await prisma.user.update({
      where: {
        email: body.email, // Field used to check if the record exists
      },
      data: {
        verified: true,
      },
    });

    if (data?.id) {
      cookieStore.set('Protme-auth', data.id);
    }

    return NextResponse.json({ message: 'Otp verified sucessfully' }, { status: 200 });
  }

  return NextResponse.json(
    { message: 'failed' },
    {
      status: 400,
    }
  );
}
