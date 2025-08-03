// app/api/logout/route.js (App Router)
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET() { // Or POST if preferred
  cookies().delete('token');
  redirect('/home');
}

// pages/api/logout.js (Pages Router)
export default function handler(req, res) {
  res.setHeader('Set-Cookie', 'your_session_cookie_name=; Max-Age=0; Path=/'); // Clear cookie
  res.status(200).json({ message: 'Logged out' });
}