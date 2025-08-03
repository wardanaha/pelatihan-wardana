import { NextResponse } from 'next/server';

export async function GET() {
  // const res = await fetch('https://api.escuelajs.co/api/v1/users');
  // const posts = await res.json();
  
  const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Or other content type like 'application/x-www-form-urlencoded'
      // Add any other necessary headers here, e.g., for authentication
    },
    body: JSON.stringify({
      "email": "john@mail.com",
      "password": "changeme"
    }),
  });
  const posts = await res.json();

  const response = NextResponse.json({ success: true, data:posts });
  
  return response;
}