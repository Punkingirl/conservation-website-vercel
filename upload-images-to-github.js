const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📁 Instructions to upload images to GitHub:');
console.log('============================================\n');

console.log('1. Open a new terminal/command prompt');
console.log('2. Navigate to a new directory:');
console.log('   cd C:\\temp\\github-upload');
console.log('3. Clone the repository:');
console.log('   git clone https://github.com/Punkingirl/conservation-images.git');
console.log('4. Copy all images from your public folder:');
console.log('   copy "C:\\Users\\sophi\\Downloads\\conservation-website\\public\\*.*" .');
console.log('5. Add and commit the files:');
console.log('   git add .');
console.log('   git commit -m "Add conservation website images"');
console.log('6. Push to GitHub:');
console.log('   git push origin main');
console.log('\n7. After this, run: node test-github-urls.js');
console.log('   to verify the URLs are working');

console.log('\n📝 Alternative: Use GitHub Web Interface');
console.log('========================================');
console.log('1. Go to: https://github.com/Punkingirl/conservation-images');
console.log('2. Click "uploading an existing file"');
console.log('3. Drag all 22 files from your public folder');
console.log('4. Add commit message: "Add conservation website images"');
console.log('5. Click "Commit changes"'); 