import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Shield,
  Target,
  Gauge,
  Layers,
  Building2,
  Home,
  Factory,
  CheckCircle2,
  DollarSign,
  TrendingDown,
  Zap,
  Maximize2,
  Flame,
  Grid3X3,
  CircleDollarSign,
  Clock,
  FileCheck,
  Banknote,
  Settings2
} from 'lucide-react'
import BorePyramid from '../components/BorePyramid'

const HomePage = () => {
  const capabilities = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Engineering",
      description: "O&G-grade accuracy in every thermal calculation and system design"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing protocols inherited from oil & gas industry standards"
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Data-driven efficiency that makes clean energy accessible to everyone"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Full-Stack Expertise",
      description: "From subsurface analysis to system commissioning — complete coverage"
    }
  ]

  const sectors = [
    { icon: <Home className="h-8 w-8" />, label: "Residential" },
    { icon: <Building2 className="h-8 w-8" />, label: "Commercial" },
    { icon: <Factory className="h-8 w-8" />, label: "Industrial" }
  ]

  const optimizationLevers = [
    "Borefield layout and thermal interaction",
    "Vertical vs collocated vs directional geometry",
    "Spacing and interference management",
    "Grout conductivity and placement quality",
    "Flow rates, Reynolds regime, and pressure losses",
    "Verified drilling geometry and QC data"
  ]

  const costBenefits = [
    { icon: <DollarSign className="h-5 w-5" />, label: "Lower CAPEX", desc: "through footprint efficiency" },
    { icon: <Settings2 className="h-5 w-5" />, label: "Lower OPEX", desc: "through optimized hydraulics" },
    { icon: <Shield className="h-5 w-5" />, label: "Lower Risk", desc: "through verified subsurface control" },
    { icon: <Clock className="h-5 w-5" />, label: "Lower Lifecycle Cost", desc: "over 20–30 years" }
  ]

  const systemBenefits = [
    { icon: <FileCheck className="h-5 w-5" />, text: "Easier to permit" },
    { icon: <Banknote className="h-5 w-5" />, text: "Cheaper to finance" },
    { icon: <Shield className="h-5 w-5" />, text: "Safer to own" },
    { icon: <Gauge className="h-5 w-5" />, text: "Cheaper to operate" }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center grid-pattern overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-900/20" />
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-sky-400/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl animate-float-slow" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-sky-500/30 rotate-45 animate-float" />
        <div className="absolute top-40 right-40 w-2 h-2 bg-cyan-400/40 rounded-full animate-float-slow" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-sky-400/20 rotate-45 animate-float animation-delay-200" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-6 animate-slide-up">
                <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse" />
                Geothermal Engineering Excellence
              </div>

              <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6 animate-slide-up animation-delay-200">
                Maximum BTU/ft².
                <br />
                <span className="gradient-text font-semibold">Minimum Lifetime Cost.</span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-4 animate-slide-up animation-delay-400">
                We bring <span className="text-sky-400 font-semibold">oil & gas precision</span> to geothermal —
                not to be expensive, but to make clean energy <span className="text-white">accessible for everyone</span>.
              </p>

              <p className="text-lg text-slate-500 leading-relaxed mb-8 animate-slide-up animation-delay-600">
                <em>Thermal density optimized through geometry, hydraulics, and verified field performance.</em>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-800">
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-all hover:shadow-lg hover:shadow-sky-500/25"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 hover:border-sky-500 text-white rounded transition-colors"
                >
                  Meet the Team
                </Link>
              </div>
            </div>

            {/* Hero Pyramid — large animated brand mark */}
            <div className="hidden lg:flex items-center justify-center animate-fade-in animation-delay-400">
              <div className="relative">
                {/* Glow ring behind pyramid */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse-glow" />
                </div>
                {/* Outer ring */}
                <div className="relative w-80 h-80 flex items-center justify-center rounded-full border border-sky-500/10">
                  {/* Inner ring */}
                  <div className="w-64 h-64 flex items-center justify-center rounded-full border border-sky-500/20">
                    {/* The pyramid icon */}
                    <BorePyramid
                      size={180}
                      topColor="#0ea5e9"
                      lineColor="#0ea5e9"
                      dotColor="#06b6d4"
                      lineOpacity={0.4}
                      dotOpacity={0.5}
                      topOpacity={1}
                      animated
                    />
                  </div>
                </div>
                {/* Labels around the pyramid */}
                <div className="absolute top-4 right-0 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-400 animate-fade-in animation-delay-800">
                  Vertical
                </div>
                <div className="absolute bottom-12 left-0 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-400 animate-fade-in animation-delay-600">
                  Inclined
                </div>
                <div className="absolute bottom-4 right-8 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-400 animate-fade-in animation-delay-800">
                  Collocated
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 animate-fade-in animation-delay-800">
          <span className="text-xs tracking-widest mb-2">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* Core Design Principle Section */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-6">
                <Flame className="h-4 w-4 mr-2" />
                Core Design Principle
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Maximum BTU per Square Foot —
                <br />
                <span className="gradient-text font-semibold">At the Lowest Lifecycle Cost</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                This is the foundation of every GeoStellar design. Our objective is simple and measurable:
              </p>
              <div className="p-6 bg-slate-900/50 border-l-4 border-sky-500 rounded-r-lg mb-8">
                <p className="text-lg text-white">
                  Deliver the <span className="text-sky-400 font-semibold">highest thermal output per square foot of land</span>, 
                  at the <span className="text-cyan-400 font-semibold">lowest total cost of ownership</span>.
                </p>
              </div>
              <p className="text-slate-400 leading-relaxed">
                That means optimizing <span className="text-white">geometry, spacing, depth, hydraulics, and thermal exchange</span> — 
                not overbuilding, not guessing, and not wasting real estate or capital.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                  <Grid3X3 className="h-5 w-5 text-sky-500 mr-2" />
                  Engineering for Density, Not Just Depth
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Traditional design focuses on bore depth and rule-of-thumb spacing. 
                  We engineer for <span className="text-white">thermal density</span> instead:
                </p>
                <ul className="space-y-2">
                  {[
                    "Maximizing BTU/ft² of available surface area",
                    "Reducing unnecessary drilling footage",
                    "Minimizing surface disturbance",
                    "Avoiding future performance degradation",
                    "Designing for consistent performance over decades"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-sky-500/5 border border-sky-500/20 rounded-lg text-center">
                <p className="text-sky-400 font-medium">More output. Less land. Lower cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Clarity Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6">
              <CircleDollarSign className="h-4 w-4 mr-2" />
              Cost Clarity
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Lowest Cost ≠ Lowest Bid
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              "Lowest cost" does <span className="text-white">not</span> mean cutting corners. It means engineering smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {costBenefits.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-950/50 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-all hover-lift"
              >
                <div className="text-emerald-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-medium text-white mb-1">{item.label}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-8">
            <h3 className="text-lg font-medium text-white mb-6 text-center">The Result: A Geothermal System That Is</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {systemBenefits.map((item, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-slate-900/50 rounded-lg">
                  <span className="text-sky-500 mr-2">{item.icon}</span>
                  <span className="text-slate-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Levers Section */}
      <section className="py-24 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">HOW WE ACHIEVE IT</h2>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                Optimization Levers
                <br />
                <span className="gradient-text font-semibold">We Control</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                We maximize BTU/ft² by engineering every controllable variable:
              </p>
              <p className="text-slate-500 italic">
                Every lever is quantified. Every assumption is tested.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {optimizationLevers.map((lever, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all"
                >
                  <Maximize2 className="h-5 w-5 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{lever}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Universal Application Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">UNIVERSAL APPLICATION</h2>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
              Applies to Every Project —
              <span className="gradient-text font-semibold"> Simple or Complex</span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-4">
              This design principle applies to classic vertical fields, urban or constrained sites, 
              collocated and directional systems, and projects of any scale.
            </p>
            <p className="text-white">
              The geometry may change. <span className="text-sky-400">The objective does not.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="p-8 bg-slate-950/50 border border-slate-800 rounded-lg text-center hover:border-sky-500/50 transition-all hover-lift"
              >
                <div className="text-sky-500 mb-4 flex justify-center">{sector.icon}</div>
                <div className="text-xl font-light text-white">{sector.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">CAPABILITIES</h2>
            <p className="text-3xl md:text-4xl font-light text-white">
              Engineering Excellence at Every Level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all hover-lift"
              >
                <div className="text-sky-500 mb-4 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sky-900/20 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Elevate Your Geothermal Projects?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Partner with GeoStellar for engineering excellence that sets your projects apart. 
            Let's discuss how our O&G expertise can benefit your next installation.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-all hover:shadow-lg hover:shadow-sky-500/25"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
