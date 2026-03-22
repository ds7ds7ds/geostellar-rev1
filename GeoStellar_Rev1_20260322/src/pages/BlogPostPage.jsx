import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  Linkedin,
  ArrowRight,
  Lightbulb,
  Wrench,
  Shield,
  Cpu,
  Compass,
  Calculator,
  Target,
  Tag
} from 'lucide-react'

const BlogPostPage = () => {
  const { slug } = useParams()

  // Blog post data
  const posts = {
    'og-standards-geothermal': {
      title: "Why O&G Standards Matter in Geothermal Engineering",
      excerpt: "The geothermal industry is growing rapidly, but quality standards haven't kept pace.",
      author: "GeoStellar Team",
      date: "January 28, 2026",
      readTime: "8 min read",
      category: "Industry Insights",
      tags: ["Oil & Gas", "Quality Standards", "Geothermal", "Engineering"],
      icon: <Lightbulb className="h-16 w-16" />,
      gradient: "from-amber-500/20 to-orange-600/20",
      content: [
        { type: 'paragraph', text: 'The geothermal industry is experiencing unprecedented growth. As more homeowners, businesses, and institutions seek sustainable heating and cooling solutions, the demand for ground-source heat pump systems has surged.' },
        { type: 'paragraph', text: 'But here\'s the challenge: while the market is expanding rapidly, <strong>quality standards haven\'t kept pace</strong>.' },
        { type: 'heading', text: 'The O&G Difference' },
        { type: 'paragraph', text: 'In oil & gas operations, where a single hour of downtime can cost $10,000 to $100,000, precision isn\'t optional—it\'s survival. Every measurement is verified. Every assumption is tested. Every system is engineered to perform under pressure, literally and figuratively.' },
        { type: 'paragraph', text: 'This culture of rigorous quality control has been refined over decades. It\'s what allows O&G operations to:' },
        { type: 'list', items: ['Achieve consistent performance in challenging conditions', 'Minimize costly rework and system failures', 'Deliver predictable, verifiable results', 'Maintain detailed documentation for every project'] },
        { type: 'heading', text: 'Why Geothermal Needs This' },
        { type: 'paragraph', text: 'Geothermal systems are long-term investments—typically 20-30 year horizons. When you\'re designing a system that needs to perform reliably for decades, "good enough" isn\'t good enough.' },
        { type: 'paragraph', text: 'Common issues we see in the industry:' },
        { type: 'list', items: ['Rule-of-thumb designs instead of engineered solutions', 'Inconsistent thermal conductivity testing', 'Lack of verified drilling geometry', 'Minimal quality control documentation', 'Performance assumptions instead of measurements'] },
        { type: 'heading', text: 'The GeoStellar Approach' },
        { type: 'paragraph', text: 'We bring O&G-grade precision to every geothermal project—not to be expensive, but to make clean energy accessible through optimized, reliable systems.' },
        { type: 'callout', text: 'When every BTU matters, when every square foot of land has value, and when systems need to perform for decades—engineering discipline isn\'t a luxury. It\'s the foundation.' }
      ]
    },
    'trt-best-practices': {
      title: "Thermal Conductivity Testing: Best Practices for Accurate Results",
      excerpt: "Accurate TRT results are the foundation of good system design.",
      author: "GeoStellar Team",
      date: "January 21, 2026",
      readTime: "6 min read",
      category: "Technical",
      tags: ["TRT", "Thermal Conductivity", "Testing", "Best Practices"],
      icon: <Wrench className="h-16 w-16" />,
      gradient: "from-sky-500/20 to-blue-600/20",
      content: [
        { type: 'paragraph', text: 'Thermal Response Testing (TRT) is the foundation of accurate geothermal system design. Get it wrong, and every calculation that follows is built on faulty assumptions.' },
        { type: 'heading', text: 'Why TRT Matters' },
        { type: 'paragraph', text: 'Ground thermal conductivity varies significantly—even within the same property. Assuming values from tables or nearby projects can lead to:' },
        { type: 'list', items: ['Undersized systems that can\'t meet load', 'Oversized systems that waste capital', 'Long-term performance degradation', 'Unexpected operating costs'] },
        { type: 'heading', text: 'Key Factors for Accurate Testing' },
        { type: 'paragraph', text: '<strong>Test Duration:</strong> Minimum 48 hours, preferably 72+ hours for accurate results.' },
        { type: 'paragraph', text: '<strong>Stable Power Input:</strong> Variations in heat input compromise data quality.' },
        { type: 'paragraph', text: '<strong>Ground Temperature Baseline:</strong> Must be established before testing begins.' },
        { type: 'paragraph', text: '<strong>Proper Equipment Calibration:</strong> Sensors and data loggers must be verified.' },
        { type: 'callout', text: 'We follow O&G-grade testing protocols because accurate data is the foundation of everything that follows. Every test is documented, every result is verified.' }
      ]
    },
    'qc-hidden-costs': {
      title: "The Hidden Costs of Poor Quality Control in Geothermal",
      excerpt: "Skipping QC steps might save time upfront, but the long-term costs can be substantial.",
      author: "GeoStellar Team",
      date: "January 14, 2026",
      readTime: "5 min read",
      category: "Quality Assurance",
      tags: ["Quality Control", "Cost Analysis", "Risk Management", "QA/QC"],
      icon: <Shield className="h-16 w-16" />,
      gradient: "from-emerald-500/20 to-green-600/20",
      content: [
        { type: 'paragraph', text: 'Quality control isn\'t glamorous. It doesn\'t show up in marketing photos. But it\'s often the difference between a system that performs for 30 years and one that becomes a liability.' },
        { type: 'heading', text: 'The True Cost of Cutting Corners' },
        { type: 'paragraph', text: 'We\'ve seen projects where skipped QC steps led to:' },
        { type: 'list', items: ['Loop field failures requiring complete replacement', 'Performance 30-40% below design specifications', 'Warranty claims that could have been prevented', 'Callbacks and rework eating into margins'] },
        { type: 'heading', text: 'QC That Matters' },
        { type: 'paragraph', text: 'Not all quality control is equal. Focus on the steps that have the biggest impact:' },
        { type: 'list', items: ['Pressure testing before backfill', 'Flow rate verification at commissioning', 'Drilling geometry documentation', 'Grout placement verification'] },
        { type: 'callout', text: 'The time invested in proper QC pays dividends over the system\'s lifetime.' }
      ]
    },
    'dts-monitoring-future': {
      title: "DTS Monitoring: The Future of Geothermal Performance Verification",
      excerpt: "Distributed Temperature Sensing offers unprecedented insight into system performance.",
      author: "GeoStellar Team",
      date: "January 7, 2026",
      readTime: "7 min read",
      category: "Technology",
      tags: ["DTS", "Fiber Optics", "Monitoring", "Performance"],
      icon: <Cpu className="h-16 w-16" />,
      gradient: "from-purple-500/20 to-violet-600/20",
      content: [
        { type: 'paragraph', text: 'Distributed Temperature Sensing (DTS) represents a step change in how we understand and verify geothermal system performance.' },
        { type: 'heading', text: 'What is DTS?' },
        { type: 'paragraph', text: 'DTS uses fiber optic cables to measure temperature continuously along the entire length of a borehole—not just at discrete points, but everywhere.' },
        { type: 'heading', text: 'Why It Matters' },
        { type: 'paragraph', text: 'Traditional monitoring gives you snapshots. DTS gives you the complete picture:' },
        { type: 'list', items: ['Identify thermal anomalies along the bore path', 'Detect performance issues before they become problems', 'Verify actual vs. designed thermal exchange', 'Optimize system operation based on real data'] },
        { type: 'callout', text: 'As geothermal moves toward Energy-as-a-Service models, verified performance becomes critical. DTS provides the data foundation for performance guarantees.' }
      ]
    },
    'northeast-design-considerations': {
      title: "Designing for the Northeast: Regional Considerations",
      excerpt: "Ground conditions, climate patterns, and regulatory requirements vary significantly.",
      author: "GeoStellar Team",
      date: "December 28, 2025",
      readTime: "6 min read",
      category: "Design",
      tags: ["Northeast", "Regional Design", "Geology", "Regulations"],
      icon: <Compass className="h-16 w-16" />,
      gradient: "from-cyan-500/20 to-teal-600/20",
      content: [
        { type: 'paragraph', text: 'Geothermal design isn\'t one-size-fits-all. Regional conditions significantly impact system performance and design requirements.' },
        { type: 'heading', text: 'Northeast Ground Conditions' },
        { type: 'paragraph', text: 'The Northeast presents unique challenges:' },
        { type: 'list', items: ['Variable geology—granite, clay, sand, mixed conditions', 'Groundwater presence and movement', 'Heating-dominant loads in most applications', 'Freeze protection requirements'] },
        { type: 'heading', text: 'Regulatory Landscape' },
        { type: 'paragraph', text: 'Massachusetts, Connecticut, and other Northeast states have specific requirements for geothermal installations. Understanding these upfront prevents costly surprises.' },
        { type: 'callout', text: 'Successful Northeast projects account for regional factors from day one. That means proper site characterization, appropriate safety factors, and designs that perform in real conditions—not just on paper.' }
      ]
    },
    'commissioning-guide': {
      title: "Commissioning Done Right: A Step-by-Step Guide",
      excerpt: "System commissioning is where design meets reality.",
      author: "GeoStellar Team",
      date: "December 21, 2025",
      readTime: "8 min read",
      category: "Technical",
      tags: ["Commissioning", "Startup", "Verification", "Guide"],
      icon: <Target className="h-16 w-16" />,
      gradient: "from-sky-500/20 to-blue-600/20",
      content: [
        { type: 'paragraph', text: 'Commissioning is the final verification that everything works as designed. Skip it or rush it, and you\'re gambling with system performance.' },
        { type: 'heading', text: '1. Pre-Startup Verification' },
        { type: 'list', items: ['All pressure tests complete and documented', 'Electrical connections verified', 'Controls properly configured'] },
        { type: 'heading', text: '2. Initial Startup' },
        { type: 'list', items: ['Controlled system energization', 'Flow rate measurement and balancing', 'Heat pump operation verification'] },
        { type: 'heading', text: '3. Performance Verification' },
        { type: 'list', items: ['Entering/leaving water temperatures', 'Actual vs. design heat transfer', 'System efficiency measurements'] },
        { type: 'heading', text: '4. Documentation & Handover' },
        { type: 'list', items: ['Complete as-built records', 'Operator training', 'Warranty documentation'] }
      ]
    },
    'economics-of-precision': {
      title: "The Economics of Precision: Why Quality Engineering Pays Off",
      excerpt: "Higher upfront engineering costs often lead to lower total project costs.",
      author: "GeoStellar Team",
      date: "December 14, 2025",
      readTime: "5 min read",
      category: "Business",
      tags: ["Economics", "ROI", "Cost Analysis", "Investment"],
      icon: <Calculator className="h-16 w-16" />,
      gradient: "from-rose-500/20 to-pink-600/20",
      content: [
        { type: 'paragraph', text: 'There\'s a persistent myth that rigorous engineering is expensive. The reality? Poor engineering is expensive. Precision pays for itself.' },
        { type: 'heading', text: 'The Math' },
        { type: 'paragraph', text: 'Consider a typical commercial geothermal project:' },
        { type: 'list', items: ['10% oversizing due to conservative assumptions = 10% wasted capital', 'Performance 15% below design = higher operating costs for 25 years', 'One major warranty claim = project profit margin gone'] },
        { type: 'heading', text: 'Where Precision Saves Money' },
        { type: 'paragraph', text: '<strong>Right-sized systems:</strong> Accurate design means you don\'t overbuild.' },
        { type: 'paragraph', text: '<strong>Predictable performance:</strong> Verified systems perform as expected.' },
        { type: 'paragraph', text: '<strong>Reduced risk:</strong> Proper QC prevents costly failures.' },
        { type: 'paragraph', text: '<strong>Easier financing:</strong> Documented quality supports better terms.' },
        { type: 'callout', text: 'Quality engineering isn\'t a cost center—it\'s a profit center. The projects that perform best financially are the ones engineered with precision from day one.' }
      ]
    }
  }

  const post = posts[slug]

  // Get related posts (exclude current)
  const relatedSlugs = Object.keys(posts).filter(s => s !== slug).slice(0, 2)

  if (!post) {
    return (
      <div className="pt-16 min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-flex items-center text-sky-400 hover:text-sky-300">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  // Share handlers
  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `${post.title} — GeoStellar Engineering`

  const handleShareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
      '_blank',
      'noopener,noreferrer,width=600,height=400'
    )
  }

  const handleShareX = () => {
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`,
      '_blank',
      'noopener,noreferrer,width=600,height=400'
    )
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl)
      alert('Link copied to clipboard!')
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = pageUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Link copied to clipboard!')
    }
  }

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return (
            <p
              key={index}
              className="text-slate-300 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: block.text }}
            />
          )
        case 'heading':
          return (
            <h2 key={index} className="text-2xl font-light text-white mt-12 mb-6">
              {block.text}
            </h2>
          )
        case 'list':
          return (
            <ul key={index} className="space-y-3 mb-6 ml-4">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start text-slate-300">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )
        case 'callout':
          return (
            <div key={index} className="my-8 p-6 bg-sky-500/10 border-l-4 border-sky-500 rounded-r-lg">
              <p className="text-white font-medium leading-relaxed">{block.text}</p>
            </div>
          )
        default:
          return null
      }
    })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-30`} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 text-white/5">
          {post.icon}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-sky-400 hover:text-sky-300 mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          <div className="flex items-center space-x-4 text-sm text-slate-500 mb-6">
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full font-medium">
              {post.category}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4 text-slate-400">
              <span className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </span>
            </div>

            {/* Share buttons — now functional */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-500 mr-2">Share:</span>
              <button
                onClick={handleShareX}
                title="Share on X (Twitter)"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                onClick={handleShareLinkedIn}
                title="Share on LinkedIn"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Linkedin className="h-4 w-4 text-slate-400" />
              </button>
              <button
                onClick={handleCopyLink}
                title="Copy link"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Share2 className="h-4 w-4 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="text-lg">
            {renderContent(post.content)}
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-800">
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="h-4 w-4 text-slate-500 mr-1" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full border border-slate-700 hover:border-sky-500/50 hover:text-sky-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bottom share bar */}
          <div className="mt-8 pt-8 border-t border-slate-800 flex items-center justify-between">
            <p className="text-sm text-slate-500">Found this useful? Share it with your network.</p>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleShareLinkedIn}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm text-slate-400 flex items-center"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </button>
              <button
                onClick={handleCopyLink}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm text-slate-400 flex items-center"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-sky-400 tracking-widest mb-8">CONTINUE READING</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedSlugs.map((relatedSlug) => {
              const related = posts[relatedSlug]
              return (
                <Link
                  key={relatedSlug}
                  to={`/blog/${relatedSlug}`}
                  className="group p-6 bg-slate-950/50 border border-slate-800 rounded-xl hover:border-sky-500/50 transition-all"
                >
                  <span className="text-xs text-slate-500 mb-2 block">{related.category}</span>
                  <h4 className="text-lg font-medium text-white group-hover:text-sky-400 transition-colors mb-2">
                    {related.title}
                  </h4>
                  <span className="text-sm text-sky-400 flex items-center">
                    Read article
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-white mb-4">
            Ready to Apply These Principles?
          </h2>
          <p className="text-slate-400 mb-8">
            Get in touch to discuss how GeoStellar can support your next project with O&G-grade precision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded-lg transition-all"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BlogPostPage
