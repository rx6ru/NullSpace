import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
    const API_KEY = process.env.WAKATIME_API_KEY;

    if (!API_KEY) {
        console.error('WAKATIME_API_KEY is missing');
        return NextResponse.json(
            { error: 'WAKATIME_API_KEY not configured' },
            { status: 500 }
        );
    }

    const url = 'https://wakatime.com/api/v1/users/current/stats/last_7_days';

    try {
        console.log(`Fetching WakaTime stats from ${url}...`);

        const response = await fetch(url, {
            headers: {
                'Authorization': `Basic ${Buffer.from(API_KEY).toString('base64')}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Portfolio-Stats-Fetcher/1.0 (rxbru)',
            },
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`WakaTime API error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error: any) {
        console.error('WakaTime Fetch Failed:', error.message);

        return NextResponse.json(
            {
                error: 'Failed to fetch WakaTime stats',
                details: error.message
            },
            { status: 500 }
        );
    }
}
