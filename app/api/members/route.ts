import { NextResponse } from 'next/server';
import { getMembers } from '@/lib/strapi';

export async function GET() {
  try {
    const members = await getMembers();
    return NextResponse.json(members);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
