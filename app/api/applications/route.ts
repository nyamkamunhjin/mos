import { NextResponse } from 'next/server';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

const ALLOWED_TYPES = ['individual', 'citizen-science', 'supporter', 'gift', 'tour', 'volunteer', 'contact'];

export async function POST(request: Request) {
    if (!STRAPI_TOKEN) {
        return NextResponse.json({ error: 'Strapi is not configured' }, { status: 500 });
    }

    let payload: Record<string, unknown>;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const name = typeof payload.name === 'string' ? payload.name.trim() : '';
    const email = typeof payload.email === 'string' ? payload.email.trim() : '';
    const type = typeof payload.type === 'string' ? payload.type : '';

    if (!name) {
        return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(type)) {
        return NextResponse.json({ error: 'Invalid application type' }, { status: 400 });
    }

    const res = await fetch(`${STRAPI_URL}/api/applications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
        body: JSON.stringify({
            data: {
                name,
                email,
                type,
                subject: typeof payload.subject === 'string' ? payload.subject.trim() : '',
                message: typeof payload.message === 'string' ? payload.message.trim() : '',
            },
        }),
        cache: 'no-store',
    });

    if (!res.ok) {
        const body = await res.text();
        console.error('Strapi application create failed:', res.status, body);
        return NextResponse.json({ error: 'Could not submit your request' }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
}
