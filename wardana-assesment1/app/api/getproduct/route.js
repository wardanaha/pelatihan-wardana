import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient();

export async function GET() {
    const posts = await prisma.$queryRaw`select a.*,b.owner_name from products a left join products_owners c on a.product_id = c.product_id left join owners b on b.id = c.owners_id;`;
    console.log(posts);
    const response = NextResponse.json({ success: true, data:posts });
    
    return response;
}