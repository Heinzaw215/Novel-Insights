// app/api/login/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Fake credentials
  if (email === 'user@example.com' && password === 'password123') {
    return NextResponse.json({ success: true, token: 'mock_token_123' });
  }

  return NextResponse.json(
    { success: false, message: 'Invalid credentials' },
    { status: 401 }
  );
}
