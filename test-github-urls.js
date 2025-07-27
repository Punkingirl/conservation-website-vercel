const https = require('https');

const testUrls = [
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/logo.png',
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/millars-beach-peninsula.jpeg',
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/fern.gif'
];

function testUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`${url}: ${res.statusCode} - ${res.statusMessage}`);
      resolve(res.statusCode === 200);
    }).on('error', (err) => {
      console.log(`${url}: ERROR - ${err.message}`);
      resolve(false);
    });
  });
}

async function testAllUrls() {
  console.log('Testing GitHub URLs...\n');
  
  for (const url of testUrls) {
    const isWorking = await testUrl(url);
    if (!isWorking) {
      console.log('❌ This URL is not accessible');
    } else {
      console.log('✅ This URL is working');
    }
    console.log('');
  }
}

testAllUrls(); 