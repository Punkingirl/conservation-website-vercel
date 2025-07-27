const https = require('https');

// Test URLs for audio and video files
const testUrls = [
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

async function testAudioVideoUrls() {
  console.log('Testing audio and video URLs from GitHub...\n');
  
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
  
  console.log(`📊 Results: ${workingCount}/${totalCount} audio/video files are accessible`);
  
  if (workingCount === totalCount) {
    console.log('🎉 All audio and video files are uploaded and accessible!');
  } else {
    console.log('⚠️  Some files may still be uploading. Large files take time.');
  }
}

testAudioVideoUrls(); 