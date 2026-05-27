import { NextResponse } from 'next/server';
import { getFamilies } from '@/lib/strapi';

export async function GET() {
  try {
    const families = await getFamilies();
    return NextResponse.json(families);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
