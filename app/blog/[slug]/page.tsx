import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

// Mock blog post content for three focused posts
const mockBlogPosts = {
  "kiwi-population-recovery": {
    _id: "post-1",
    title: "Kiwi Population Shows Promising Signs of Recovery",
    slug: { current: "kiwi-population-recovery" },
    publishedAt: "2023-11-15T09:00:00Z",
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Recent monitoring efforts have revealed a 15% increase in kiwi sightings across the Millars Beach Peninsula, suggesting our predator control measures are having a positive impact on the local kiwi population.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The North Island brown kiwi (Apteryx mantelli) is one of New Zealand's most iconic and endangered native birds. With an estimated population decline of 2-3% annually across New Zealand, any sign of population recovery is significant for conservation efforts.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Our team has been conducting regular night surveys and tracking tunnel monitoring since the inception of the Millars Beach Restoration Project. The data collected over the past 18 months shows a clear correlation between our intensive predator control program and increased kiwi activity.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Key Findings",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "• 15% increase in kiwi call rates during standardized listening surveys\n• 23% increase in kiwi footprint detections in tracking tunnels\n• First confirmed kiwi nesting site discovered in the eastern section of the peninsula\n• Two juvenile kiwi spotted, suggesting successful breeding",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "According to our team's observations: \"The presence of juvenile kiwi is particularly encouraging. It indicates that not only are adult kiwi surviving, but they're successfully reproducing and raising chicks to a stage where they can survive independently. This is a critical indicator of a recovering population.\"",
          },
        ],
      },
      {
        _type: "image",
        asset: { _ref: "kiwi-video-still" },
        alt: "Still image from night vision camera showing a kiwi foraging",
        caption: "Night vision camera footage captured a kiwi foraging near one of our monitoring stations",
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Predator Control Success",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The increase in kiwi activity correlates directly with our predator control efforts. Since implementing our comprehensive trapping network:",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "• 157 rats trapped\n• 23 stoats eliminated\n• 12 feral cats removed\n• Significant reduction in tracking tunnel indices for all predator species",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "These results highlight the effectiveness of our approach and the importance of sustained predator control efforts. The reduction in predator numbers creates a safer environment for kiwi, particularly vulnerable chicks and juveniles.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Looking Forward",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "While these results are encouraging, we recognize that conservation is a long-term commitment. Our team is now working on expanding the predator control network to cover the entire peninsula, which we expect will further benefit not only kiwi but all native wildlife in the area.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This success would not be possible without the dedication of our volunteers and the generous support of our donors. Every trap checked, every bait station refilled, and every dollar contributed makes a tangible difference to the survival of these remarkable birds.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "How You Can Help",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "If you'd like to contribute to our kiwi conservation efforts, there are several ways to get involved:",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "• Donate to support our predator control program\n• Volunteer for trap checking and maintenance\n• Participate in our kiwi listening surveys (seasonal)\n• Spread awareness about the importance of predator control for kiwi conservation",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Together, we can ensure that the distinctive call of the kiwi continues to echo through the forests of Millars Beach Peninsula for generations to come.",
          },
        ],
      },
    ],
    coverImage: "/images/kiwi-footprints.jpeg",
    category: "Wildlife",
    author: {
      name: "Andy Marshall",
      avatar: "/stylized-letter-st.png",
      bio: "Conservation Project Manager at Millars Beach Conservation Trust",
    },
  },
  "volunteer-weekend-trap-installation": {
    _id: "post-2",
    title: "Volunteer Weekend: 20 New Traps Installed",
    slug: { current: "volunteer-weekend-trap-installation" },
    publishedAt: "2023-10-28T14:30:00Z",
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Last weekend, a dedicated team of 15 volunteers braved challenging weather conditions to install 20 new predator traps, significantly expanding our network to cover the western section of the Millars Beach Peninsula.",
          },
        ],
      },
      {
        _type: "image",
        asset: { _ref: "conservation-volunteers-field" },
        alt: "Volunteers checking trap markers in the native forest",
        caption: "Volunteers documenting trap locations and checking markers during our recent installation day",
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Expanding Our Reach",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The new traps are part of our Phase 2 expansion, which aims to extend predator control to the western third of the peninsula. This area contains valuable habitat for several native bird species, including tūī, bellbird, and the South Island robin.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "The Trapping Network",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The newly installed traps include 12 DOC200 double-set traps and 8 Goodnature A24 automatic traps, strategically placed along newly cut tracks that run through the western section of the peninsula.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Join Us",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "If you're inspired by what our volunteers accomplished and would like to get involved, we're always looking for more helping hands. Our next volunteer weekend is scheduled for November 25-26. To register your interest, please contact us at millarsbeach@gmail.com or visit our Support Us page.",
          },
        ],
      },
    ],
    coverImage: "/conservation-volunteers-field.jpeg",
    category: "Community",
    author: {
      name: "Andy Marshall",
      avatar: "/abstract-geometric-mj.png",
      bio: "Conservation Project Manager at Millars Beach Conservation Trust",
    },
  },
  "phase-3-funding-secured": {
    _id: "post-5",
    title: "New Funding Secured for Phase 3 Expansion",
    slug: { current: "phase-3-funding-secured" },
    publishedAt: "2023-09-10T10:00:00Z",
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "We're thrilled to announce that the Millars Beach Restoration Project has secured significant funding from the Pacific Development and Conservation Trust to support the expansion of our conservation efforts into Phase 3.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This grant of $45,000 will enable us to extend our predator control network to cover the final third of the peninsula, completing our comprehensive approach to pest management across the entire 100-hectare site.",
          },
        ],
      },
      {
        _type: "image",
        asset: { _ref: "funding-announcement" },
        alt: "Team members receiving the funding check",
        caption:
          "Our team receiving the funding confirmation from Pacific Development and Conservation Trust representatives",
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "A Milestone for Conservation",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This funding represents a significant milestone in our journey to restore the native ecosystem of Millars Beach Peninsula. With Phases 1 and 2 already showing promising results in terms of reduced pest numbers and increased native wildlife activity, the completion of Phase 3 will create a fully protected sanctuary for our precious native species.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: '"This grant is transformative for our project," says Jessica Lord, Project Director. "It allows us to complete our vision of comprehensive predator control across the entire peninsula, creating a safe haven for native wildlife to thrive. We\'re incredibly grateful to the Pacific Development and Conservation Trust for their support and belief in our work."',
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "What Phase 3 Will Deliver",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The Phase 3 expansion will include:",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "• Installation of 40 additional predator traps in the northwestern section of the peninsula\n• Creation of 3km of new trap lines and access tracks\n• Deployment of 15 monitoring stations to track wildlife recovery\n• Purchase of essential equipment for volunteer trap checkers\n• Training workshops for new volunteers",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This comprehensive approach will create a continuous network of predator control across the entire peninsula, significantly reducing the risk of reinvasion and creating a more effective sanctuary for native wildlife.",
          },
        ],
      },
      {
        _type: "image",
        asset: { _ref: "phase-3-map" },
        alt: "Map showing the Phase 3 expansion area",
        caption: "Map of the peninsula showing the Phase 3 expansion area (highlighted in green)",
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Timeline and Implementation",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Work on Phase 3 will begin in October 2023 with track cutting and marking. Trap installation is scheduled for November and December, with the full network expected to be operational by January 2024.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "We'll be organizing several volunteer weekends throughout this period to help with various aspects of the implementation. These events provide a wonderful opportunity for community members to get involved and contribute directly to conservation efforts.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "The Bigger Picture",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The Millars Beach Restoration Project is part of the broader Predator Free Rakiura 2050 initiative, which aims to eliminate introduced predators from Stewart Island/Rakiura. Our work on the peninsula serves as a valuable case study for predator control in similar coastal forest environments.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "By demonstrating effective predator control and monitoring the subsequent recovery of native species, we're contributing valuable data and insights to the wider conservation community in New Zealand.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Thank You to Our Supporters",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This achievement would not be possible without the ongoing support of our volunteers, donors, and partners. We extend our heartfelt thanks to everyone who has contributed to the project so far, whether through volunteering time, providing financial support, or offering expertise and guidance.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Special thanks go to the Pacific Development and Conservation Trust for this significant grant, as well as to our existing funders: Jobs for Nature, Environment Southland, and the Murihiku Rūnaka and Rio Tinto / NZAS Community Development Fund.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Together, we're making a tangible difference to the conservation of Millars Beach Peninsula and contributing to the broader goal of protecting New Zealand's unique biodiversity for future generations.",
          },
        ],
      },
    ],
    coverImage: "/funding-announcement.png",
    category: "News",
    author: {
      name: "Andy Marshall",
      avatar: "/stylized-jl-logo.png",
      bio: "Conservation Project Manager at Millars Beach Conservation Trust",
    },
  },
}

// Helper function to render content blocks
const renderContent = (content) => {
  return content.map((block, index) => {
    if (block._type === "block") {
      // Handle text blocks
      const style = block.style || "normal"
      const text = block.children[0].text

      if (style === "h2") {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {text}
          </h2>
        )
      }

      // Handle lists by checking for bullet points
      if (text.includes("• ")) {
        const items = text.split("• ").filter((item) => item.trim())
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2">
            {items.map((item, i) => (
              <li key={i}>{item.trim()}</li>
            ))}
          </ul>
        )
      }

      return (
        <p key={index} className="my-4">
          {text}
        </p>
      )
    }

    if (block._type === "image") {
      // Handle images
      let imgSrc = "/conservation-efforts.png"
      let isKiwiVideoStill = false

      // Use actual images if we have them
      if (block.asset._ref === "kiwi-tracks") {
        imgSrc = "/images/kiwi-footprints.jpeg"
      } else if (block.asset._ref === "kiwi-video-still") {
        imgSrc = "/kiwi-night-vision.png"
        isKiwiVideoStill = true
      } else if (block.asset._ref === "conservation-volunteers-field") {
        imgSrc = "/conservation-volunteers-field.jpeg"
      } else if (block.asset._ref === "funding-announcement") {
        imgSrc = "/funding-announcement.png"
      } else if (block.asset._ref === "phase-3-map") {
        imgSrc = "/phase-3-map.png"
      }

      return (
        <div key={index} className="my-6">
          <div className={`${isKiwiVideoStill ? "flex flex-col items-center" : ""}`}>
            {block.caption && isKiwiVideoStill && (
              <div className="text-center text-sm text-gray-600 mb-2 max-w-md">{block.caption}</div>
            )}
            <div className={`${isKiwiVideoStill ? "flex justify-center" : ""}`}>
              <Image
                src={imgSrc || "/placeholder.svg"}
                alt={block.alt || "Blog post image"}
                width={isKiwiVideoStill ? 500 : 800}
                height={isKiwiVideoStill ? 350 : 500}
                className={`rounded-lg ${isKiwiVideoStill ? "w-auto max-w-md" : ""}`}
              />
            </div>
            {block.caption && !isKiwiVideoStill && (
              <div className="text-center text-sm text-gray-600 mt-2">{block.caption}</div>
            )}
          </div>
        </div>
      )
    }

    return null
  })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Get post from our mock data
  const post = mockBlogPosts[params.slug]

  if (!post) {
    notFound()
  }

  // Check if this is the kiwi post to apply special styling to the cover image
  const isKiwiPost = params.slug === "kiwi-population-recovery"

  return (
    <main className="max-w-6xl mx-auto bg-white">
      {/* Navigation */}
      <SiteHeader currentPath="/blog" />

      <article className="px-6 py-12">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-gray-600 hover:underline flex items-center">
            ← Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-gray-600">{format(new Date(post.publishedAt), "dd MMMM yyyy")}</span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{post.category}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center">
            {post.author?.avatar && (
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
            )}
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-600">{post.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Cover Image - with special styling for kiwi post */}
        {post.coverImage && (
          <div className={`mb-8 ${isKiwiPost ? "flex justify-center" : ""}`}>
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={isKiwiPost ? 600 : 1200}
              height={isKiwiPost ? 400 : 600}
              className={`rounded-lg ${isKiwiPost ? "w-auto max-w-md" : "w-full"}`}
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose max-w-none">{renderContent(post.content)}</div>
      </article>

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
