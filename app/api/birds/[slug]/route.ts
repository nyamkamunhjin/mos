import { NextRequest, NextResponse } from 'next/server';
import { getBirdBySlug } from '@/lib/strapi';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  try {
    const bird = await getBirdBySlug(slug);
    if (!bird) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(bird);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch bird' }, { status: 500 });
  }
}
