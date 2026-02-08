const https = require('https');
const fs = require('fs');
const path = require('path');

// Load env simply
const envPath = path.join(__dirname, '.env.local');
let apiKey = '';
try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/WAKATIME_API_KEY=(.*)/);
    if (match) {
        apiKey = match[1].trim();
        // Remove quotes if present
        if ((apiKey.startsWith('"') && apiKey.endsWith('"')) || (apiKey.startsWith("'") && apiKey.endsWith("'"))) {
            apiKey = apiKey.slice(1, -1);
        }
    }
} catch (e) {
    console.error("Could not read .env.local");
    process.exit(1);
}

if (!apiKey) {
    console.error("No API KEY found in .env.local");
    process.exit(1);
}

console.log(`Key found (Length: ${apiKey.length}): ${apiKey.substring(0, 5)}...`);
// Print hex codes of first and last few chars to check for invisible invisible characters
console.log("Key Hex Start:", Buffer.from(apiKey.substring(0, 4)).toString('hex'));
console.log("Key Hex End:", Buffer.from(apiKey.substring(apiKey.length - 4)).toString('hex'));

const url = 'https://wakatime.com/api/v1/users/current/stats/last_7_days';

console.log(`Requesting: ${url}`);

const options = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'User-Agent': 'NodeJS-Debug-Script',
        'Accept': 'application/json'
    }
};

const req = https.request(url, options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    console.log(`Headers:`, res.headers);
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Body Preview:', data.substring(0, 500));
    });
});

req.on('error', (e) => {
    console.error("Request Error Object:", e);
    console.error(`Request Error Code: ${e.code}`);
    console.error(`Request Error Message: ${e.message}`);
    if (e.cause) console.error("Error Cause:", e.cause);
});

req.end();
