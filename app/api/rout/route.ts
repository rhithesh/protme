import { EmailTemplate } from './EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend("re_T9wrKr2S_4CZRZTNf5hMfrPijbifxDfVZ");

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Hithesh <onboarding@resend.dev>',
      to: ['rhithesh1947@gmail.com'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Prabanjan" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}