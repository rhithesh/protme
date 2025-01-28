import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  try {
    // Parse the request body
    const body = await req.json();

    // Validate input fields
    const { userId, name, college, role, project, email } = {
      userId: cookieStore.get('Protme-auth')?.value,
      name: body.part1,
      college: body.part2,
      role: body.part3,
      project: body.project1,
      email: body.project2,
    };
    if (!userId || !name || !college || !role || !project) {
      return NextResponse.json({ error: 'All fields are required.' });
    }
    console.log(userId, name, college, role, project, email, 'My name is Hithesh');

    const upsertedData = await prisma.data.upsert({
      where: {
        userId: userId, // Ensure uniqueness by userId
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
        userId: userId as string,
      },
    });

    // Return the NextResponseult
    return NextResponse.json(upsertedData);
  } catch (error) {
    console.error('Error during upsert operation:', error);

    // Handle other unexpected errors
    return NextResponse.json({ error: 'An unexpected error occurred.' });
  }
}
