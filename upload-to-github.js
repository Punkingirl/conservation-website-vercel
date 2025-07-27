const fs = require('fs');
const path = require('path');

// GitHub configuration
const GITHUB_USERNAME = 'Punkingirl';
const REPO_NAME = 'conservation-images';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // You'll need to set this

const publicDir = path.join(__dirname, 'public');
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

function getImageFiles() {
  const files = fs.readdirSync(publicDir);
  return files.filter(file => 
    imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
  );
}

function createGitHubRepoInstructions() {
  const imageFiles = getImageFiles();
  
  console.log('📁 Instructions to create GitHub repository and upload images:');
  console.log('=============================================================\n');
  
  console.log('1. Go to https://github.com/new');
  console.log('2. Repository name: conservation-images');
  console.log('3. Make it Public');
  console.log('4. Click "Create repository"\n');
  
  console.log('5. Upload these files to the repository:');
  console.log('=========================================\n');
  
  imageFiles.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
  
  console.log('\n6. After uploading, your images will be available at:');
  console.log('=====================================================\n');
  
  imageFiles.forEach(file => {
    const githubUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/main/${file}`;
    console.log(`${file}:`);
    console.log(`  ${githubUrl}\n`);
  });
  
  console.log('7. Once uploaded, run: node update-all-images.js');
  console.log('   This will update all image references in your code.');
}

createGitHubRepoInstructions(); 