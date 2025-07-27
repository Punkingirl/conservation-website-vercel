import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

type Block = {
  _type: string;
  style?: string;
  children?: { _type: string; text: string }[];
  asset?: { _ref: string };
  alt?: string;
  caption?: string;
};

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  content: Block[];
  coverImage: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
    bio: string;
  };
};

// Mock blog post content for three focused posts
const mockBlogPosts: { [key: string]: BlogPost } = {
  "kiwi-population-recovery": {
    _id: "post-1",
    title: "Kiwi Population Shows Promising Signs of Recovery",
    slug: { current: "kiwi-population-recovery" },
    publishedAt: "2025-02-01T09:00:00Z",
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Recent monitoring efforts have revealed encouraging signs for New Zealand's iconic kiwi population, with a significant increase in kiwi sightings across the Millars Beach Peninsula. These positive trends suggest our comprehensive predator control measures are having a meaningful impact on local kiwi populations.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The North Island brown kiwi (Apteryx mantelli), one of New Zealand's most beloved native birds, has faced serious threats across the country. While national populations had been declining at an estimated rate of 2-3% annually across New Zealand, targeted conservation areas are now showing remarkable recovery.",
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
            text: "• 15% increase in kiwi call rates during standardized listening surveys\n• 23% increase in kiwi footprint detections in tracking tunnels\n• First confirmed kiwi nesting site discovered in the eastern section of the peninsula\n• Two juvenile kiwi observed, suggesting successful breeding",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: 'According to our field researchers: "The presence of juvenile kiwi is particularly encouraging as it indicates not only are adult kiwi surviving, but they\'re successfully reproducing and raising chicks to independence. This is a critical indicator of population recovery."',
          },
        ],
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
            text: "The increase in kiwi activity correlates directly with our intensive predator control efforts. Since implementing our comprehensive trapping network:",
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
            text: "These results highlight the effectiveness of our approach and the importance of sustained predator control. The reduction in predator numbers creates a safer environment for kiwi, particularly vulnerable chicks and juveniles.",
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
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "References",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "• Save the Kiwi. (2024, April 28). Kiwi population grows by 7,000 - what we need to do to ensure that growth doesn't go backwards. https://savethekiwi.nz/kiwi-population-grows-by-7000-but-is-that-growth-about-to-go-backwards/\n• Predator Free NZ Trust. (2024, December 2). Running out of space: kiwi translocations. https://predatorfreenz.org/stories/running-out-of-space-kiwi-translocations/",
          },
        ],
      },
    ],
            coverImage: "/kiwi-footprints.jpeg",
    category: "Wildlife",
    author: {
      name: "Andy Marshall",
      avatar: "/fern.gif",
      bio: "Conservation Project Manager at Millars Beach Conservation Trust",
    },
  },
  "volunteer-weekend-trap-installation": {
    _id: "post-2",
    title: "Volunteer Weekend: 20 New Traps Installed to Boost Kiwi Protection",
    slug: { current: "volunteer-weekend-trap-installation" },
    publishedAt: "2025-03-25T09:00:00Z",
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Last weekend, a dedicated team of 15 volunteers braved challenging weather conditions to install 20 new predator traps, significantly expanding our network to cover the western section of the Millars Beach Peninsula. This expansion represents a crucial step in our ongoing efforts to create a safer environment for native wildlife, including our recovering kiwi population.",
          },
        ],
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
            text: "The new traps are part of our Phase 2 expansion, which aims to extend predator control to the western third of the peninsula. This area contains valuable habitat for several native bird species, including tūī, bellbird, and the South Island robin, as well as potential kiwi territory.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: '"Expanding our trapping network is critical for creating a continuous predator-controlled area," explains our lead trapping coordinator. "Predators like stoats can travel long distances, so any gaps in coverage can undermine the effectiveness of our conservation efforts."',
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
        children: [
          {
            _type: "span",
            text: "The DOC200 traps are designed specifically to target stoats, rats, and hedgehogs - all significant threats to kiwi. These humane kill traps are set within wooden boxes to protect native birds while effectively eliminating introduced predators.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The Goodnature A24 traps represent the latest in predator control technology, with self-resetting mechanisms that can dispatch up to 24 predators before requiring maintenance. These innovative traps use CO2 canisters to power a piston that kills the predator instantly when triggered, then automatically resets for the next target.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Monitoring Effectiveness",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Each trap has been recorded in our digital tracking system using the Trap.NZ app, which allows volunteers to document catches and maintain traps efficiently. This system will provide valuable data on predator numbers and help us assess the effectiveness of our expanded network.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: 'First-time volunteer Sarah Thompson shared her experience: "It was incredible to learn about the impact these predators have on our native birds. Setting up the traps was hard work, especially in the rain, but knowing we\'re helping protect kiwi and other native species made it absolutely worthwhile."',
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
            text: "If you're inspired by what our volunteers accomplished and would like to get involved, we're always looking for more helping hands. Our next volunteer weekend is scheduled for November 25-26, focusing on trap maintenance and monitoring.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "No previous experience is necessary – we provide full training in trap setting, safety protocols, and predator identification. To register your interest, please contact us at millarsbeach@gmail.com or visit our Support Us page.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Together, we can continue expanding our predator control network and create a safer environment for our precious native wildlife.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "References",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "• Department of Conservation. (2024, April 17). Replacing traps for a kiwi-friendly future. https://www.doc.govt.nz/news/media-releases/2024-media-releases/replacing-traps-for-a-kiwi-friendly-future/\n• Predator Free NZ Trust. (2024). Get involved in backyard trapping. https://predatorfreenz.org/",
          },
        ],
      },
    ],
            coverImage: "/volunteer.jpg",
    category: "volunteers",
    author: {
      name: "Conservation Team",
      avatar: "/fern.gif",
      bio: "Millars Beach Conservation Trust",
    },
  },
  "phase-3-funding-secured": {
    _id: "post-5",
    title: "The Natural Splendor of Millars Beach",
    slug: { current: "phase-3-funding-secured" },
    publishedAt: "2025-05-14T09:00:00Z",
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Nestled along New Zealand's coastline, Millars Beach offers visitors a remarkable glimpse into our country's natural heritage. This hidden gem combines diverse ecosystems, stunning vistas, and abundant wildlife in one accessible location.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Where Forest Meets Sea",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "What makes Millars Beach truly special is the seamless transition from dense native forest to pristine shoreline. Walking the coastal track, visitors experience multiple ecosystems within a short distance – from coastal dunes with specialized salt-tolerant plants, through regenerating podocarp forest, to mature rimu and tōtara stands inland.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The meeting of land and sea creates dramatic scenery, with pōhutukawa trees clinging to rocky outcrops. During summer, their crimson blooms create a stunning display against the turquoise waters below.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Rich Biodiversity",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The peninsula hosts over 400 indigenous plant species, including several rare and endangered varieties. The forest understory reveals treasures like delicate ferns, ground orchids, and native clematis that fills the air with sweet scent in spring.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A highlight is the eastern fern gully, where ancient tree ferns create a prehistoric atmosphere with their massive fronds forming a natural cathedral overhead. The small stream running through this section connects the forest ecosystem to the sea, providing habitat for native freshwater species.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Changing Seasons",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Each season brings distinct transformations to Millars Beach:",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "• Spring: An explosion of new growth and birdsong, with tūī and bellbirds feeding on flowering kōwhai trees\n• Summer: Coastal pōhutukawa trees burst into brilliant red bloom, while sheltered coves offer perfect swimming spots\n• Autumn: Subtle color changes and fascinating fungi emerging on forest floors\n• Winter: Dramatic seas crash against coastal rocks, while clear days offer the sharpest views to distant islands",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Stars and Silence",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "With minimal light pollution, Millars Beach provides exceptional stargazing opportunities. On clear nights, the Milky Way stretches dramatically across the sky, with the Southern Cross and Magellanic Clouds clearly visible. We're working toward having the area recognized as an official Dark Sky Sanctuary.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Conservation and Beauty",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Our conservation work ensures future generations can experience this special place. The healthy forest that provides habitat for kiwi and other native birds also prevents erosion and maintains water quality in streams and coastal areas.",
          },
        ],
      },

      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Visit and Connect",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: 'Several walking tracks cater to different fitness levels, from the accessible Coastal Loop (30 minutes) to the more challenging Peninsula Circuit (3-4 hours). Our monthly "Forest Connections" guided walks provide insights into the ecology and hidden gems of the area.',
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: 'Whether you\'re a passionate naturalist or simply seeking tranquility in a beautiful setting, Millars Beach offers a chance to reconnect with the natural world and experience a piece of New Zealand as it once was.',
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: 'To learn more about visiting Millars Beach or to support our conservation work, please visit millarsbeach.nz or contact info@millarsbeach.nz.',
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "References",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "• Department of Conservation. (2024). Native plants. https://www.doc.govt.nz/nature/native-plants/\n• New Zealand Geographic. (2023). Coastal forests of New Zealand. https://www.nzgeo.com/stories/coastal-forests/",
          },
        ],
      },
    ],
            coverImage: "/Prices point rocks.jpg",
    category: "News",
    author: {
      name: "Andy Marshall",
              avatar: "/fern.gif",
      bio: "Conservation Project Manager at Millars Beach Conservation Trust",
    },
  },
}

// Helper function to render content blocks
const renderContent = (content: Block[]) => {
  return content.map((block: Block, index: number) => {
    if (block._type === "block") {
      // Handle text blocks
      const style = block.style || "normal"
      const text = block.children && block.children[0] ? block.children[0].text : ""

      if (style === "h2") {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {text}
          </h2>
        )
      }

      // Handle lists by checking for bullet points
      if (text.includes("• ")) {
        const items = text.split("• ").filter((item: string) => item.trim())
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2">
            {items.map((item: string, i: number) => (
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
      if (block.asset && block.asset._ref === "kiwi-tracks") {
        imgSrc = "/kiwi-footprints.jpeg"
      } else if (block.asset && block.asset._ref === "kiwi-video-still") {
        imgSrc = "/kiwi-night-vision.png"
        isKiwiVideoStill = true
      } else if (block.asset && block.asset._ref === "conservation-volunteers-field") {
        imgSrc = "/volunteer.jpg"
        // Set custom size for this image
        return (
          <div key={index} className="my-6">
            <div>
              <Image
                src={imgSrc || "/placeholder.svg"}
                alt={block.alt || "Blog post image"}
                width={500}
                height={300}
                className="rounded-lg"
              />
              {block.caption && (
                <div className="text-center text-sm text-gray-600 mt-2">{block.caption}</div>
              )}
            </div>
          </div>
        )
      } else if (block.asset && block.asset._ref === "funding-announcement") {
        imgSrc = "/funding-announcement.png"
      } else if (block.asset && block.asset._ref === "phase-3-map") {
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
          <div className={`mb-8 ${isKiwiPost ? "flex justify-center" : post.slug.current === "volunteer-weekend-trap-installation" ? "flex justify-center" : ""}`}>
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={isKiwiPost ? 500 : post.slug.current === "volunteer-weekend-trap-installation" ? 700 : 1200}
              height={isKiwiPost ? 300 : post.slug.current === "volunteer-weekend-trap-installation" ? 420 : 600}
              className={`rounded-lg ${isKiwiPost ? "w-auto max-w-md" : post.slug.current === "volunteer-weekend-trap-installation" ? "w-auto" : "w-full"}`}
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
