import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Basic input validation & security sanitization
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // In a production app, here you would persist to PostgreSQL via Prisma/Drizzle
    // and trigger an email notification (e.g. via Resend or SendGrid).
    console.log('[FOLU Dev Portfolio] New inquiry received:', {
      name: name.slice(0, 100),
      email: email.slice(0, 100),
      service,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry successfully transmitted. Folu Dev will get back to you within 24 hours.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
