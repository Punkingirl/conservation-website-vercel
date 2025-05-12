# Create a new directory for your Sanity Studio
mkdir -p conservation-cms/studio

# Navigate to the directory
cd conservation-cms/studio

# Initialize a new Sanity project
npx sanity@latest init --template clean

# When prompted:
# - Create new project
# - Give it a name (e.g., "Conservation Trust CMS")
# - Use the default dataset configuration
# - Select "Clean project with no predefined schemas"

# Navigate to your Next.js project directory
cd your-nextjs-project

# Install Sanity client libraries
npm install next-sanity @portabletext/react @sanity/image-url
