const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'public');
const tempDir = path.join(__dirname, 'temp-github-upload');
const repoUrl = 'https://github.com/Punkingirl/conservation-images.git';

console.log('🚀 Starting automated GitHub upload for all media files...\n');

try {
  // Step 1: Create temp directory
  console.log('1. Creating temporary directory...');
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempDir);
  
  // Step 2: Clone the repository
  console.log('2. Cloning GitHub repository...');
  execSync(`git clone ${repoUrl} "${tempDir}"`, { stdio: 'inherit' });
  
  // Step 3: Copy all image files from public root
  console.log('3. Copying image files from public root...');
  const imageFiles = fs.readdirSync(sourceDir).filter(file => 
    ['.png', '.jpg', '.jpeg', '.gif', '.webp'].some(ext => 
      file.toLowerCase().endsWith(ext)
    )
  );
  
  imageFiles.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(tempDir, file);
    fs.copyFileSync(sourcePath, destPath);
    console.log(`   ✅ Copied ${file}`);
  });
  
  // Step 4: Copy audio files
  console.log('4. Copying audio files...');
  const audioDir = path.join(sourceDir, 'audios');
  if (fs.existsSync(audioDir)) {
    const audioFiles = fs.readdirSync(audioDir);
    audioFiles.forEach(file => {
      const sourcePath = path.join(audioDir, file);
      const destPath = path.join(tempDir, file);
      fs.copyFileSync(sourcePath, destPath);
      console.log(`   ✅ Copied audio: ${file}`);
    });
  }
  
  // Step 5: Copy video files
  console.log('5. Copying video files...');
  const videoDir = path.join(sourceDir, 'videos');
  if (fs.existsSync(videoDir)) {
    const videoFiles = fs.readdirSync(videoDir);
    videoFiles.forEach(file => {
      const sourcePath = path.join(videoDir, file);
      const destPath = path.join(tempDir, file);
      fs.copyFileSync(sourcePath, destPath);
      console.log(`   ✅ Copied video: ${file}`);
    });
  }
  
  // Step 6: Navigate to temp directory and commit
  console.log('6. Committing files to Git...');
  process.chdir(tempDir);
  
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Add all conservation website media files"', { stdio: 'inherit' });
  
  // Step 7: Push to GitHub
  console.log('7. Pushing to GitHub...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('\n🎉 Success! All media files have been uploaded to GitHub!');
  console.log('📝 Next steps:');
  console.log('   1. Run: node test-all-media-urls.js');
  console.log('   2. If URLs work, update your code to use GitHub URLs');
  
} catch (error) {
  console.error('❌ Error during upload:', error.message);
  console.log('\n📝 Manual steps if automated upload fails:');
  console.log('1. Go to https://github.com/Punkingirl/conservation-images');
  console.log('2. Click "uploading an existing file"');
  console.log('3. Upload all files from public/ folder and subfolders');
  console.log('4. Add commit message: "Add all media files"');
  console.log('5. Click "Commit changes"');
} finally {
  // Clean up temp directory
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
} 