import { NextRequest, NextResponse } from 'next/server';
import { getBirds } from '@/lib/strapi';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  try {
    const result = await getBirds({
      page: Number(searchParams.get('page')) || 1,
      pageSize: Number(searchParams.get('pageSize')) || 24,
      family: searchParams.get('family') || undefined,
      conservationStatus: searchParams.get('conservationStatus') || undefined,
      search: searchParams.get('search') || undefined,
      sort: searchParams.get('sort') || undefined,
    });
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { birds: [], pagination: { page: 1, pageSize: 24, pageCount: 1, total: 0 } },
      { status: 200 },
    );
  }
}
