import React, { useState, useEffect } from "react";
import {
  Calendar,
  BookOpen,
  FileText,
  ChevronRight,
  Tag,
  ArrowLeft,
  Clock,
  User,
  Sparkles,
} from "lucide-react";

// --- Dummy Data (converted content to HTML strings) ---
const BLOG_DATA = [
  {
    id: 1,
    title:
      "7 Best White Label Crypto Exchange Platforms for Businesses in 2026",
    description:
      "Explore 2026's best white label crypto exchange solutions for brokers and fintechs ready to enter the digital asset market with confidence.",
    content: `
      <p>The digital asset market is evolving rapidly, and for brokerage firms looking to expand their offerings...</p>
      <h3>Why Choose a White Label Solution?</h3>
      <p>Building an exchange from scratch requires significant capital...</p>
      <ul>
        <li>Matching Engine: High-performance trade execution.</li>
        <li>Liquidity: Pre-connected liquidity pools.</li>
        <li>Security: Enterprise-grade cold storage and encryption.</li>
        <li>Compliance: Built-in KYC/AML modules.</li>
      </ul>
      <p>In this guide, we analyze the top providers...</p>
    `,
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000&auto=format&fit=crop",
    category: "Articles",
    group: "Education",
    date: "20.11.25",
    readTime: "8 min read",
    author: "Sarah Jenkins",
    tags: ["Business Tips", "Professional", "Crypto"],
  },
  {
    id: 2,
    title: "Stablecoin Use Cases: The Complete Guide for Businesses in 2025",
    description:
      "Understand the use case of stablecoins for businesses. Increase speed, reduce costs, and future-proof your infrastructure.",
    content: `
      <p>Stablecoins have transitioned from a niche crypto trading tool...</p>
      <h3>Key Business Applications</h3>
      <p><strong>1. Cross-Border Settlements:</strong> SWIFT takes days...</p>
      <p><strong>2. Payroll:</strong> Instant payments without forex fees...</p>
      <p><strong>3. Treasury Management:</strong> Earn yield via DeFi...</p>
      <p>2025 regulatory clarity improves adoption...</p>
    `,
    image:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1000&auto=format&fit=crop",
    category: "Articles",
    group: "Education",
    date: "01.10.25",
    readTime: "6 min read",
    author: "Michael Chen",
    tags: ["FinTech", "Blockchain", "Crypto"],
  },
  {
    id: 3,
    title: "The Complete Guide to OTC Trading Platforms for Institutions",
    description:
      "Discover the benefits, features, and selection criteria for OTC trading platforms.",
    content: `
      <p>Over-the-Counter (OTC) trading allows institutions to execute large trades...</p>
      <h3>Essential Features of an OTC Platform</h3>
      <ul>
        <li>RFQ Automation for better pricing</li>
        <li>Deep aggregated liquidity pools</li>
        <li>Automated clearing & settlement</li>
      </ul>
      <p>Capyngen's OTC solution integrates seamlessly...</p>
    `,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    category: "Product Guides",
    group: "Education",
    date: "30.09.25",
    readTime: "12 min read",
    author: "Alex V.",
    tags: ["Business Tips", "OTC", "Institutional"],
  },
  {
    id: 4,
    title:
      "Building The Perfect Digital Asset Brokerage | Capyngen at FMAS 2024",
    description:
      "Join our head of business development as he takes over the main stage.",
    content: `
      <p>FMAS 2024 was a landmark fintech event...</p>
      <ul>
        <li>Forex & Crypto tech convergence</li>
        <li>Regulatory challenges</li>
        <li>Unified liquidity bridge model</li>
      </ul>
      <p>Watch the full session...</p>
    `,
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop",
    category: "Presentation",
    group: "Events",
    date: "17.07.24",
    readTime: "45 min watch",
    author: "Capyngen Media",
    tags: ["Keynote", "Events", "Brokerage"],
  },
  {
    id: 5,
    title:
      "How to Boost Your Brokerage Firm with The Best Copy Trading Platforms",
    description:
      "Catch up with our product manager on Copy Trading essentials.",
    content: `
      <p>Social trading is now a major growth driver...</p>
      <ul>
        <li>Community engagement tools</li>
        <li>Advanced risk controls</li>
        <li>New monetization models</li>
      </ul>
    `,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
    category: "Presentation",
    group: "Events",
    date: "14.06.24",
    readTime: "30 min watch",
    author: "Capyngen Media",
    tags: ["Copy Trading", "Growth", "Forex"],
  },
  {
    id: 6,
    title: "Revolutionizing Finance: Digital Assets in Brokerage",
    description: "A masterclass delivered by our CEO at Crypto Expo Dubai.",
    content: `
      <p>Dubai is becoming a global crypto hub...</p>
      <p>Session focused on RWA tokenization & multi-asset infrastructure...</p>
    `,
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1000&auto=format&fit=crop",
    category: "Webinars",
    group: "Events",
    date: "14.06.24",
    readTime: "1 hour watch",
    author: "CEO Office",
    tags: ["Masterclass", "Crypto", "Future"],
  },
  {
    id: 7,
    title: "Capmarket Platform Update v4.2",
    description: "50% more throughput & new liquidity connectors.",
    content: `
      <p>Capmarket v4.2 focuses heavily on performance...</p>
      <h3>Changelog v4.2</h3>
      <ul>
        <li>Matching Engine: 50% more throughput</li>
        <li>Liquidity Bridge: Binance + LMAX connectors</li>
        <li>Fix API latency improved</li>
        <li>Dark mode improvements</li>
      </ul>
    `,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    category: "Product Updates",
    group: "News",
    date: "10.05.25",
    readTime: "3 min read",
    author: "Tech Team",
    tags: ["Update", "Tech", "Platform"],
  },
];

// FILTER GROUPS
const FILTER_GROUPS = [
  {
    label: "Education",
    filters: ["Articles", "Library", "Presentation", "Product Guides"],
  },
  { label: "News", filters: ["Product Updates", "Corporate", "Industry"] },
  { label: "Events", filters: ["Webinars", "Expo"] },
  { label: "Other", filters: ["Videos", "Media"] },
];

// MAIN COMPONENT (.jsx)
const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  // Load related blog suggestions
  useEffect(() => {
    if (selectedBlog) {
      const related = BLOG_DATA.filter((post) => {
        if (post.id === selectedBlog.id) return false;
        const categoryMatch = post.category === selectedBlog.category;
        const tagMatch = post.tags.some((t) => selectedBlog.tags.includes(t));
        return categoryMatch || tagMatch;
      }).slice(0, 3);

      setRelatedBlogs(related);
    }
  }, [selectedBlog]);

  const filteredData =
    activeFilter === "All"
      ? BLOG_DATA
      : BLOG_DATA.filter(
          (item) =>
            item.category === activeFilter || item.tags.includes(activeFilter)
        );

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
    document
      .getElementById("media-hub")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTagClick = (e, tag) => {
    e.stopPropagation();
    setActiveFilter(tag);
    setSelectedBlog(null);
  };

  return (
    <div className="w-full bg-black py-20">
      <section className="max-w-[90vw] mx-auto w-full px-8" id="media-hub">
        {/* ========================
          SINGLE POST VIEW
      ========================== */}
        {selectedBlog ? (
          <div className="animate-fade-in">
            {/* HEADER */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-6 mb-10">
              <button
                onClick={() => setSelectedBlog(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Media Hub
              </button>

              <span className="text-slate-500 text-sm">Reading Article</span>
            </div>

            {/* CONTENT */}
            <div className="max-w-4xl mx-auto">
              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 uppercase border border-cyan-500/20 text-xs">
                  {selectedBlog.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {selectedBlog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {selectedBlog.readTime}
                </span>
              </div>

              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
                {selectedBlog.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <User className="w-5 h-5 text-slate-300" />
                </div>

                <div>
                  <div className="text-white text-sm">
                    {selectedBlog.author}
                  </div>
                  <div className="text-slate-500 text-xs">Author</div>
                </div>
              </div>

              {/* Image */}
              <div className="rounded-md overflow-hidden border border-slate-800 shadow-xl mb-10">
                <img
                  src={selectedBlog.image}
                  alt=""
                  className="w-full h-[350px] object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="prose prose-invert max-w-none mb-16">
                <div
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
              </div>

              {/* TAGS */}
              <div className="border-t border-slate-800 pt-8 mb-16">
                <h4 className="text-slate-400 font-bold uppercase text-xs mb-3">
                  Related Tags
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selectedBlog.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={(e) => handleTagClick(e, tag)}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-300 hover:border-cyan-400"
                    >
                      <Tag className="w-4 h-4 text-cyan-400" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* RELATED BLOGS */}
              {relatedBlogs.length > 0 && (
                <div className="border-t border-slate-800 pt-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-white text-2xl font-bold">
                      Related Insights
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedBlogs.map((post) => (
                      <div
                        key={post.id}
                        onClick={() => handleCardClick(post)}
                        className="cursor-pointer border border-slate-800 bg-slate-900 rounded-xl overflow-hidden hover:border-slate-600 hover:-translate-y-1 transition-all"
                      >
                        <img
                          src={post.image}
                          className="h-32 w-full object-cover"
                        />

                        <div className="p-4">
                          <h4 className="text-white font-bold text-sm line-clamp-2 mb-2 hover:text-cyan-400">
                            {post.title}
                          </h4>
                          <span className="text-xs text-slate-500">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* ===========================
              LIST VIEW
          ============================ */}

            {/* HEADER */}
            <div className="flex justify-between items-end mb-12 flex-col md:flex-row gap-6">
              <div>
                <h2 className="text-white text-5xl font-extrabold">Blogs</h2>
              </div>

              <button
                onClick={() => setActiveFilter("All")}
                className={`px-6 py-2 rounded-full border ${
                  activeFilter === "All"
                    ? "bg-white text-slate-900"
                    : "bg-slate-900 border-slate-700 text-slate-400"
                }`}
              >
                View All
              </button>
            </div>

            {/* FILTER GROUPS */}
            <div className="border-y border-slate-800 py-10 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
                <p className="hidden lg:block text-slate-400 text-lg">
                  Explore our library of articles, product insights, event
                  summaries, and platform updates.
                </p>

                <div className="space-y-6">
                  {FILTER_GROUPS.map((group) => (
                    <div
                      key={group.label}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <span className="text-slate-500 font-medium w-24">
                        {group.label}
                      </span>

                      <div className="flex flex-wrap gap-2">
                        {group.filters.map((filter) => (
                          <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-1.5 rounded-full text-sm border ${
                              activeFilter === filter
                                ? "bg-cyan-500 border-cyan-500 text-white"
                                : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"
                            }`}
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BLOG GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredData.map((post) => (
                <article
                  key={post.id}
                  onClick={() => handleCardClick(post)}
                  className="cursor-pointer bg-slate-900 border border-slate-800 rounded-md overflow-hidden hover:border-slate-600 hover:-translate-y-1 transition-all"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute top-4 left-4 text-xs bg-slate-900/80 border border-slate-700 px-3 py-1 rounded-md text-white uppercase">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-white text-xl font-bold group-hover:text-cyan-400 mb-3">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex justify-between items-center border-t border-slate-800 pt-4 mt-auto">
                      <div className="flex gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <button
                            key={tag}
                            onClick={(e) => handleTagClick(e, tag)}
                            className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300 hover:bg-slate-700 flex items-center gap-1"
                          >
                            <Tag className="w-3 h-3" /> {tag}
                          </button>
                        ))}
                      </div>

                      <span className="text-xs text-slate-500">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* EMPTY */}
            {filteredData.length === 0 && (
              <div className="text-center py-20 bg-slate-900/50 rounded-xl border border-slate-800 mt-20">
                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-slate-600" />
                </div>

                <h3 className="text-white text-xl mb-2">No articles found</h3>
                <p className="text-slate-400 mb-4">
                  Try selecting a different category or tag.
                </p>

                <button
                  onClick={() => setActiveFilter("All")}
                  className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Blogs;
