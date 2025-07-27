const https = require('https');

// GitHub configuration
const GITHUB_USERNAME = 'Punkingirl';
const REPO_NAME = 'conservation-images';
const BRANCH = 'main';

// Test URLs for different media types
const testUrls = [
  // Images
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/logo.png',
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/millars-beach-peninsula.jpeg',
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/greenhood-orchid.jpeg',
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/kiwi-footprints.jpeg',
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/southIslandMap.png',
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/trap-nz-mobile-app-map.png',
  
  // Audio
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/Tui_Bellbird_Kaka.mov',
  
  // Videos
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/VID_Kiwi01.mp4',
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/Drone_Point2Millars.mov',
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/Stewart island Robin.mov',
  'https://raw.githubusercontent.com/Punkingirl/conservation-images/main/IMG_Possum_0010.MP4'
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
  console.log('Testing all media URLs from GitHub...\n');
  
  let workingCount = 0;
  let totalCount = testUrls.length;
  
  for (const url of testUrls) {
    const isWorking = await testUrl(url);
    if (isWorking) {
      console.log('✅ This URL is working');
      workingCount++;
    } else {
      console.log('❌ This URL is not accessible');
    }
    console.log('');
  }
  
  console.log(`📊 Results: ${workingCount}/${totalCount} URLs are working`);
  
  if (workingCount === totalCount) {
    console.log('🎉 All media files are accessible!');
    console.log('📝 Next step: Update your code to use these GitHub URLs');
  } else {
    console.log('⚠️  Some files may not be uploaded yet. Check the GitHub repository.');
  }
}

testAllUrls(); 