import Link from "next/link"
import { format } from "date-fns"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

// Sample blog posts data structure
const mockBlogPosts = [
  {
    _id: "post-1",
    title: "Kiwi Population Shows Promising Signs of Recovery",
    slug: { current: "kiwi-population-recovery" },
    publishedAt: "2025-02-01T09:00:00Z",
    excerpt:
      "Recent monitoring efforts have revealed a 15% increase in kiwi sightings across the peninsula, suggesting our predator control measures are having a positive impact.",
    category: "Wildlife",
    author: {
      name: "Andy Marshall",
      avatar: "/images/fern.gif",
    },
  },
  {
    _id: "post-2",
    title: "Volunteer Weekend: 20 New Traps Installed to Boost Kiwi Protection",
    slug: { current: "volunteer-weekend-trap-installation" },
    publishedAt: "2025-03-25T09:00:00Z",
    excerpt:
      "A team of 15 volunteers installed 20 new predator traps in challenging conditions, expanding our network and boosting protection for kiwi and other native wildlife on the Millars Beach Peninsula.",
    category: "Community",
    author: {
      name: "Conservation Team",
      avatar: "/images/fern.gif",
    },
  },
  {
    _id: "post-3",
    title: "New Funding Secured for Phase 3 Expansion",
    slug: { current: "phase-3-funding-secured" },
    publishedAt: "2025-05-14T09:00:00Z",
    excerpt:
      "Nestled along New Zealand's coastline, Millars Beach offers visitors a remarkable glimpse into our country's natural heritage. This hidden gem combines diverse ecosystems, stunning vistas, and abundant wildlife in one accessible location.",
    category: "News",
    author: {
      name: "Andy Marshall",
      avatar: "/images/fern.gif",
    },
  },
]

export default function BlogPage() {
  const blogPosts = mockBlogPosts

  return (
    <div>
      <SiteHeader currentPath="/blog" />

      <main className="max-w-6xl mx-auto bg-white pt-8">
        <div className="text-center my-12">
          <h1 className="text-4xl font-bold tracking-wider">Blog</h1>
        </div>

        <div className="px-6 mb-12">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <div key={post._id} className="border rounded-md p-6 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{format(new Date(post.publishedAt), "dd MMMM yyyy")}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{post.category}</span>
                  </div>

                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>

                  <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      {post.author?.avatar && (
                        <img
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author?.name || "Author"}
                          width={48}
                          height={48}
                          className="rounded-full mr-2 w-12 h-12"
                        />
                      )}
                      <span className="text-sm text-gray-600">{post.author?.name || "Anonymous"}</span>
                    </div>

                    <Link href={`/blog/${post.slug.current}`} className="text-sm font-medium hover:underline">
                      <span className="inline-block bg-sea-green text-white px-5 py-2 rounded-md text-base font-semibold shadow hover:bg-spring-green transition-colors">Read</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No blog posts found.</p>
              <p className="text-gray-500">Blog posts will appear here once they are added to the CMS.</p>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
