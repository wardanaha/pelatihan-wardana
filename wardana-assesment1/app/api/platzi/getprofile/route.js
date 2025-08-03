import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    const token_api = cookieStore.get('token_api')?.value;
    
    console.log(token_api);
    const res = await fetch('https://api.escuelajs.co/api/v1/auth/profile',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token_api
        }
        }
    );
    const posts = await res.json();
    const response = NextResponse.json({ success: true, data:posts });
  
    return response;
}