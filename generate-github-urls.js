const fs = require('fs');
const path = require('path');

// Replace with your actual GitHub username and repository name
const GITHUB_USERNAME = 'Punkingirl';
const REPO_NAME = 'conservation-images';
const BRANCH = 'main';

const publicDir = path.join(__dirname, 'public');
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

function generateGitHubUrls() {
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => 
    imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
  );

  console.log('GitHub Raw URLs for your images:');
  console.log('=====================================\n');

  imageFiles.forEach(file => {
    const githubUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/${file}`;
    console.log(`${file}:`);
    console.log(`  ${githubUrl}\n`);
  });

  console.log('\nTo use these URLs:');
  console.log('1. Create a new GitHub repository called "conservation-images"');
  console.log('2. Upload all these image files to that repository');
  console.log('3. Replace the local paths in your code with these GitHub URLs');
}

generateGitHubUrls(); 