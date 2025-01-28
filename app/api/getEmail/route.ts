import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: NextRequest) {
  const searchParams = new URLSearchParams(req.url.split('?')[1]);
  const search = searchParams.get('email');
  console.log(search, 'Hello');

  const data = await prisma.user.findUnique({
    where: {
      email: search as string,
    },
    include: {
      data: true,
    },
  });

  //console.log(await prisma.user.findMany({}))

  return NextResponse.json({ data });
}
