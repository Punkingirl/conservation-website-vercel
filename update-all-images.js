const fs = require('fs');
const path = require('path');

// GitHub configuration
const GITHUB_USERNAME = 'Punkingirl';
const REPO_NAME = 'conservation-images';
const BRANCH = 'main';

const publicDir = path.join(__dirname, 'public');
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

function getImageFiles() {
  const files = fs.readdirSync(publicDir);
  return files.filter(file => 
    imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
  );
}

function updateFileContent(filePath, oldPath, newUrl) {
  let content = fs.readFileSync(filePath, 'utf8');
  const oldPattern = new RegExp(`"${oldPath}"`, 'g');
  const newPattern = `"${newUrl}"`;
  
  if (content.includes(oldPath)) {
    content = content.replace(oldPattern, newPattern);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${filePath}`);
    return true;
  }
  return false;
}

function updateAllImageReferences() {
  const imageFiles = getImageFiles();
  const filesToUpdate = [
    'components/logo.tsx',
    'app/page.tsx',
    'app/support-us/page.tsx',
    'app/donate/page.tsx',
    'app/contact/page.tsx',
    'app/about/page.tsx',
    'app/layout.tsx',
    'app/gallery/page.tsx',
    'app/blog/[slug]/page.tsx',
    'app/blog/page.tsx'
  ];

  console.log('🔄 Updating all image references to GitHub URLs...\n');

  let totalUpdates = 0;

  imageFiles.forEach(imageFile => {
    const oldPath = `/${imageFile}`;
    const newUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/${imageFile}`;
    
    console.log(`📸 Processing ${imageFile}:`);
    console.log(`   Old: ${oldPath}`);
    console.log(`   New: ${newUrl}`);
    
    filesToUpdate.forEach(filePath => {
      if (fs.existsSync(filePath)) {
        if (updateFileContent(filePath, oldPath, newUrl)) {
          totalUpdates++;
        }
      }
    });
    console.log('');
  });

  console.log(`✅ Total updates made: ${totalUpdates}`);
  console.log('\n🎉 All image references have been updated!');
  console.log('📝 Next steps:');
  console.log('   1. Commit and push these changes');
  console.log('   2. Deploy to Vercel');
  console.log('   3. Your images should now display correctly!');
}

updateAllImageReferences(); 