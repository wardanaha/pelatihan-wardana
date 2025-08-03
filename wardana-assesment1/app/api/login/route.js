import { PrismaClient } from '@/generated/prisma'
import { SignJWT } from 'jose';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(request) {
  const { username, password } = await request.json();
  let posts = null;
  let user = null;

  if(username=='john@mail.com'){
    const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Or other content type like 'application/x-www-form-urlencoded'
        // Add any other necessary headers here, e.g., for authentication
      },
      body: JSON.stringify({
        "email": username,
        "password": password
      }),
    });
    posts = await res.json();

    if(!posts){
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
    }
    user = {id:1,username:username};
  }else{
    user = await prisma.users.findUnique({ where: { username } });

    if (!user) {
      return NextResponse.json({ error: 'Invalid username' }, { status: 401 });
    }

    if (password!=user.password) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }
  }
  
  const user_ = { id: 1, username };
  const token = await new SignJWT(user_)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(secret);
  // const token = jwt.sign({ userId: user.username }, secret, { expiresIn: '1h' });
  const response = NextResponse.json({ success: true, message: 'Login successful', user: { id: user.id, username: user.username } });
  
  // console.log(token);
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
  response.cookies.set('token_api', posts.access_token);

  // console.log(response)
  return response;
  // return NextResponse.json({ message: 'Login successful', user: { id: user.id, username: user.username } });
}
