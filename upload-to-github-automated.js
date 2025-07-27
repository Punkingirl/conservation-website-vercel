const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'public');
const tempDir = path.join(__dirname, 'temp-github-upload');
const repoUrl = 'https://github.com/Punkingirl/conservation-images.git';

console.log('🚀 Starting automated GitHub upload...\n');

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
  
  // Step 3: Copy all image files
  console.log('3. Copying image files...');
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
  
  // Step 4: Navigate to temp directory and commit
  console.log('4. Committing files to Git...');
  process.chdir(tempDir);
  
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Add conservation website images"', { stdio: 'inherit' });
  
  // Step 5: Push to GitHub
  console.log('5. Pushing to GitHub...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('\n🎉 Success! All images have been uploaded to GitHub!');
  console.log('📝 Next steps:');
  console.log('   1. Run: node test-github-urls.js');
  console.log('   2. If URLs work, commit and push your website changes');
  
} catch (error) {
  console.error('❌ Error during upload:', error.message);
  console.log('\n📝 Manual steps if automated upload fails:');
  console.log('1. Open terminal/command prompt');
  console.log('2. Run: cd temp-github-upload');
  console.log('3. Run: git clone https://github.com/Punkingirl/conservation-images.git');
  console.log('4. Copy all files from public/ folder to the cloned directory');
  console.log('5. Run: git add . && git commit -m "Add images" && git push origin main');
} finally {
  // Clean up temp directory
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
} 