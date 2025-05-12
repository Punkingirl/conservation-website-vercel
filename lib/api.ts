import { sanityClient } from "./sanity"

// Fetch all blog posts
export async function getAllPosts() {
  try {
    const posts = await sanityClient.fetch(`
      *[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        coverImage,
        "author": author->{name, avatar},
        category
      }
    `)
    return posts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string) {
  try {
    const post = await sanityClient.fetch(
      `
      *[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        content,
        coverImage,
        "author": author->{name, avatar, bio},
        category
      }
    `,
      { slug },
    )
    return post
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error)
    return null
  }
}

// Fetch all gallery images
export async function getAllGalleryImages() {
  try {
    const images = await sanityClient.fetch(`
      *[_type == "galleryImage"] | order(_createdAt desc) {
        _id,
        caption,
        image,
        alt,
        category
      }
    `)
    return images
  } catch (error) {
    console.error("Error fetching gallery images:", error)
    return []
  }
}

// Fetch gallery images by category
export async function getGalleryImagesByCategory(category: string) {
  try {
    const images = await sanityClient.fetch(
      `
      *[_type == "galleryImage" && category == $category] | order(_createdAt desc) {
        _id,
        caption,
        image,
        alt,
        category
      }
    `,
      { category },
    )
    return images
  } catch (error) {
    console.error(`Error fetching images with category ${category}:`, error)
    return []
  }
}
