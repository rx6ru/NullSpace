import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

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

        // Try standard fetch first (for Vercel/Production)
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
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
        console.error('Standard Fetch Failed:', error.message);
        console.log('Attempting cURL fallback for local environment...');

        try {
            // Fallback to system cURL (for local workspace where node networking might be restricted)
            // Use query param for curl to avoid header quoting issues in shell
            const curlCmd = `curl -s "${url}?api_key=${API_KEY}"`;
            const { stdout } = await execAsync(curlCmd);

            if (!stdout) throw new Error('Empty output from curl');

            const data = JSON.parse(stdout);
            return NextResponse.json(data);

        } catch (curlError: any) {
            console.error('cURL Fallback Failed:', curlError.message);
            return NextResponse.json(
                {
                    error: 'Failed to fetch WakaTime stats (Fetch & cURL both failed)',
                    details: error.message,
                    curlDetails: curlError.message
                },
                { status: 500 }
            );
        }
    }
}
