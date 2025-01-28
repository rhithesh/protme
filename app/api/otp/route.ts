import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const min = 100;
  const max = 200;
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

  prisma.user.update({
    where: {
      email: body.email,
    },
    data: {
      verificationCode: randomInteger,
    },
  });

  return NextResponse.json({ message: 'Updated Request sucessfully' });
}
