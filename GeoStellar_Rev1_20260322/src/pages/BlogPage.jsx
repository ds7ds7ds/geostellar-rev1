import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Clock,
  User,
  Lightbulb,
  Wrench,
  Shield,
  Cpu,
  Compass,
  Calculator,
  Target,
  CheckCircle2,
  Mail
} from 'lucide-react'

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false)

  const featuredPost = {
    title: "Why O&G Standards Matter in Geothermal Engineering",
    excerpt: "The geothermal industry is growing rapidly, but quality standards haven't kept pace. Here's why adopting oil & gas industry practices is critical for long-term system performance and reliability.",
    author: "GeoStellar Team",
    date: "January 28, 2026",
    readTime: "8 min read",
    category: "Industry Insights",
    slug: "og-standards-geothermal",
    icon: <Lightbulb className="h-12 w-12" />,
    gradient: "from-amber-500/20 to-orange-600/20"
  }

  const posts = [
    {
      title: "Thermal Conductivity Testing: Best Practices for Accurate Results",
      excerpt: "Accurate TRT results are the foundation of good system design. We break down the key factors that affect test accuracy and how to ensure reliable data.",
      author: "GeoStellar Team",
      date: "January 21, 2026",
      readTime: "6 min read",
      category: "Technical",
      slug: "trt-best-practices",
      icon: <Wrench className="h-8 w-8" />,
      gradient: "from-sky-500/20 to-blue-600/20"
    },
    {
      title: "The Hidden Costs of Poor Quality Control in Geothermal",
      excerpt: "Skipping QC steps might save time upfront, but the long-term costs can be substantial. A look at real-world examples and how to avoid common pitfalls.",
      author: "GeoStellar Team",
      date: "January 14, 2026",
      readTime: "5 min read",
      category: "Quality Assurance",
      slug: "qc-hidden-costs",
      icon: <Shield className="h-8 w-8" />,
      gradient: "from-emerald-500/20 to-green-600/20"
    },
    {
      title: "DTS Monitoring: The Future of Geothermal Performance Verification",
      excerpt: "Distributed Temperature Sensing offers unprecedented insight into system performance. Here's how we're using this technology to optimize installations.",
      author: "GeoStellar Team",
      date: "January 7, 2026",
      readTime: "7 min read",
      category: "Technology",
      slug: "dts-monitoring-future",
      icon: <Cpu className="h-8 w-8" />,
      gradient: "from-purple-500/20 to-violet-600/20"
    },
    {
      title: "Designing for the Northeast: Regional Considerations",
      excerpt: "Ground conditions, climate patterns, and regulatory requirements vary significantly across the Northeast. Key design considerations for optimal performance.",
      author: "GeoStellar Team",
      date: "December 28, 2025",
      readTime: "6 min read",
      category: "Design",
      slug: "northeast-design-considerations",
      icon: <Compass className="h-8 w-8" />,
      gradient: "from-cyan-500/20 to-teal-600/20"
    },
    {
      title: "Commissioning Done Right: A Step-by-Step Guide",
      excerpt: "System commissioning is where design meets reality. Our comprehensive approach ensures every system performs to specification from day one.",
      author: "GeoStellar Team",
      date: "December 21, 2025",
      readTime: "8 min read",
      category: "Technical",
      slug: "commissioning-guide",
      icon: <Target className="h-8 w-8" />,
      gradient: "from-sky-500/20 to-blue-600/20"
    },
    {
      title: "The Economics of Precision: Why Quality Engineering Pays Off",
      excerpt: "Higher upfront engineering costs often lead to lower total project costs. We analyze the ROI of investing in proper design and QC.",
      author: "GeoStellar Team",
      date: "December 14, 2025",
      readTime: "5 min read",
      category: "Business",
      slug: "economics-of-precision",
      icon: <Calculator className="h-8 w-8" />,
      gradient: "from-rose-500/20 to-pink-600/20"
    }
  ]

  // All posts including featured
  const allPosts = [featuredPost, ...posts]

  const categories = [
    { name: "All", count: allPosts.length },
    { name: "Technical", count: allPosts.filter(p => p.category === 'Technical').length },
    { name: "Industry Insights", count: allPosts.filter(p => p.category === 'Industry Insights').length },
    { name: "Quality Assurance", count: allPosts.filter(p => p.category === 'Quality Assurance').length },
    { name: "Technology", count: allPosts.filter(p => p.category === 'Technology').length },
    { name: "Design", count: allPosts.filter(p => p.category === 'Design').length },
    { name: "Business", count: allPosts.filter(p => p.category === 'Business').length }
  ]

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  const showFeatured = activeCategory === 'All' || featuredPost.category === activeCategory

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mpqygwkb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newsletterEmail,
          _subject: 'GeoStellar Newsletter Subscription',
          type: 'newsletter'
        })
      })

      if (response.ok) {
        setNewsletterSubmitted(true)
      } else {
        window.location.href = `mailto:info@geo-pioneer.com?subject=${encodeURIComponent('Newsletter Subscription')}&body=${encodeURIComponent(`Please add me to the GeoStellar newsletter: ${newsletterEmail}`)}`
        setNewsletterSubmitted(true)
      }
    } catch {
      window.location.href = `mailto:info@geo-pioneer.com?subject=${encodeURIComponent('Newsletter Subscription')}&body=${encodeURIComponent(`Please add me to the GeoStellar newsletter: ${newsletterEmail}`)}`
      setNewsletterSubmitted(true)
    } finally {
      setNewsletterSubmitting(false)
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">INSIGHTS</h2>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Technical Perspectives &
              <br />
              <span className="gradient-text font-semibold">Industry Knowledge</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Deep dives into geothermal engineering, quality standards, and the technical
              expertise that sets exceptional projects apart.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-slate-950 border-b border-slate-800 sticky top-16 z-40 backdrop-blur-lg bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 text-sm rounded transition-all ${
                  activeCategory === cat.name
                    ? 'bg-sky-500 text-slate-900 font-medium'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {cat.name}
                <span className="ml-2 text-xs opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {showFeatured && (
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm font-semibold text-sky-400 tracking-widest mb-6">FEATURED ARTICLE</div>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-500/50 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Visual */}
                <div className={`bg-gradient-to-br ${featuredPost.gradient} h-64 lg:h-auto flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-900/20" />
                  <div className="relative text-sky-400/60 group-hover:text-sky-400/80 group-hover:scale-110 transition-all duration-500">
                    {featuredPost.icon}
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-8 left-8 w-20 h-20 border border-sky-500/20 rounded-full" />
                  <div className="absolute bottom-8 right-8 w-32 h-32 border border-sky-500/10 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-sky-500/5 rounded-full" />
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-light text-white mb-4 group-hover:text-sky-400 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-500">
                      <User className="h-4 w-4 mr-2" />
                      {featuredPost.author} • {featuredPost.date}
                    </div>
                    <span className="inline-flex items-center text-sky-400 group-hover:text-sky-300 text-sm font-medium">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold text-sky-400 tracking-widest mb-8">
            {activeCategory === 'All' ? 'ALL ARTICLES' : activeCategory.toUpperCase()}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">No articles in this category yet.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-sky-400 hover:text-sky-300 text-sm"
              >
                View all articles
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="group bg-slate-950/50 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-500/50 transition-all hover-lift block"
                >
                  {/* Visual Header */}
                  <div className={`bg-gradient-to-br ${post.gradient} h-48 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-slate-900/30" />
                    <div className="relative text-white/40 group-hover:text-white/60 group-hover:scale-110 transition-all duration-300">
                      {post.icon}
                    </div>
                    {/* Decorative circle */}
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 border border-white/5 rounded-full" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-slate-500 mb-3">
                      <span className="px-2 py-1 bg-slate-800 text-slate-400 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium text-white mb-3 group-hover:text-sky-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <span className="text-xs text-slate-500">{post.date}</span>
                      <span className="text-xs text-sky-400 font-medium group-hover:text-sky-300 flex items-center">
                        Read
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-400 mb-8">
            Get technical insights and industry updates delivered to your inbox.
          </p>
          {newsletterSubmitted ? (
            <div className="flex items-center justify-center space-x-2 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
              <span>Thanks for subscribing! We'll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={newsletterSubmitting}
                className="px-6 py-3 bg-sky-500 hover:bg-sky-400 disabled:bg-sky-500/50 text-slate-900 font-medium rounded-lg transition-colors flex items-center justify-center"
              >
                {newsletterSubmitting ? 'Sending...' : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          )}
          <p className="text-xs text-slate-600 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
