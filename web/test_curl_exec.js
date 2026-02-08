const { exec } = require('child_process');
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
        if ((apiKey.startsWith('"') && apiKey.endsWith('"')) || (apiKey.startsWith("'") && apiKey.endsWith("'"))) {
            apiKey = apiKey.slice(1, -1);
        }
    }
} catch (e) {
    console.error("Could not read .env.local");
    process.exit(1);
}

if (!apiKey) {
    console.error("No API KEY found");
    process.exit(1);
}

// url encode the key just in case
const encodedKey = encodeURIComponent(apiKey);
const cmd = `curl -s "https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${encodedKey}"`;

console.log("Executing curl with query param...");

exec(cmd, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }

    try {
        const data = JSON.parse(stdout);
        // console.log(JSON.stringify(data, null, 2));
        if (data.data) {
            console.log("SUCCESS: Curl retrieved data!");
            console.log("Languages found:", data.data.languages ? data.data.languages.length : 0);
        } else {
            console.log("FAILURE: Curl returned unexpected JSON", data);
        }
    } catch (e) {
        console.log("FAILURE: Could not parse output", stdout);
    }
});
