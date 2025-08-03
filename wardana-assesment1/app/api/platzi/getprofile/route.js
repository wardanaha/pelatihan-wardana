import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('https://api.escuelajs.co/api/v1/auth/profile',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTc1NDA0NDk1MiwiZXhwIjoxNzU1NzcyOTUyfQ.we_IHSiMqIutEonqEVJJGkwB2wHlC_E5HwJNBKOhBa8'
        }
        }
    );
    const posts = await res.json();
    const response = NextResponse.json({ success: true, data:posts });
  
    return response;
}