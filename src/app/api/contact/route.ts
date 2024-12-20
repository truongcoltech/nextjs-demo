// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Simulate a backend action, such as saving the form data or sending an email
    console.log(`Received message from ${name} (${email}): ${message}`);

    // Return a success response
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "There was an error submitting the form." },
      { status: 500 }
    );
  }
}
