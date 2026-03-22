import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Compass,
  FileCheck,
  Thermometer,
  Activity,
  Ruler,
  Waves,
  Gauge,
  Settings,
  CheckCircle2,
  Shield,
  Target,
  Layers,
  Building2,
  TrendingUp,
  Database
} from 'lucide-react'
import BorePyramid from '../components/BorePyramid'

const ServicesPage = () => {
  const services = [
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Design & Engineering",
      description: "Complete geothermal system design with O&G-grade precision. From load calculations to loop field layout, we engineer systems that perform.",
      features: [
        "Thermal load analysis",
        "Ground loop design",
        "Heat pump sizing",
        "System integration planning",
        "CAD drawings & specifications"
      ]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Execution & Supervision",
      description: "On-site technical oversight ensuring every installation meets our rigorous standards. We don't just design — we deliver.",
      features: [
        "Installation supervision",
        "Quality checkpoints",
        "Real-time problem solving",
        "Contractor coordination",
        "Progress documentation"
      ]
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Permits & Licensing",
      description: "Navigate the regulatory landscape with confidence. We handle the paperwork so you can focus on execution.",
      features: [
        "Permit applications",
        "Code compliance review",
        "Utility coordination",
        "Environmental assessments",
        "Inspection coordination"
      ]
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Thermal Conductivity Testing",
      description: "Accurate ground thermal property analysis using industry-leading equipment and methodologies.",
      features: [
        "In-situ thermal response tests",
        "Soil thermal analysis",
        "Ground temperature profiling",
        "Conductivity mapping",
        "Test result interpretation"
      ]
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Quality Control",
      description: "Comprehensive QC protocols adapted from oil & gas industry best practices. Every detail matters.",
      features: [
        "Material verification",
        "Pressure testing",
        "Flow rate validation",
        "Thermal performance checks",
        "Documentation & reporting"
      ]
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: "Directional & Inclination Measurements",
      description: "Precision bore path verification ensuring optimal loop placement and system performance.",
      features: [
        "Borehole deviation surveys",
        "Inclination logging",
        "Depth verification",
        "Path correction recommendations",
        "As-built documentation"
      ]
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Fiber Temperature Measurements",
      description: "Distributed temperature sensing (DTS) for detailed thermal profiling along the entire borehole length.",
      features: [
        "DTS installation & monitoring",
        "Temperature gradient analysis",
        "Thermal anomaly detection",
        "Long-term monitoring setup",
        "Performance trending"
      ]
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Flow & Pressure Tests",
      description: "Comprehensive hydraulic testing to verify system integrity and optimize circulation performance.",
      features: [
        "Flow rate measurement",
        "Pressure loss analysis",
        "Leak detection",
        "Pump curve verification",
        "System balancing"
      ]
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "System Commissioning",
      description: "Final verification and handover ensuring every system performs to specification from day one.",
      features: [
        "Startup procedures",
        "Performance verification",
        "Control system setup",
        "Operator training",
        "Warranty documentation"
      ]
    }
  ]

  const qcFeatures = [
    "Drilling geometry and inclination verification",
    "Thermal response and performance testing",
    "Flow and pressure validation",
    "Digital QA records and reporting",
    "Optional fiber / DTS temperature monitoring"
  ]

  const eaasFeatures = [
    "Long-term service agreements",
    "Third-party ownership and financing",
    "Utility-grade documentation and data access",
    "Auditable performance over time"
  ]

  const directionalBenefits = [
    "High thermal capacity in limited surface area",
    "Precise control of subsurface trajectories",
    "Respect for property boundaries and setbacks",
    "Collision avoidance with adjacent bores, utilities, and structures"
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        {/* Decorative pyramid watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
          <BorePyramid size={400} topColor="#fff" lineColor="#fff" dotColor="#fff" lineOpacity={1} dotOpacity={1} topOpacity={1} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">SERVICES</h2>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Comprehensive Geothermal
              <br />
              <span className="gradient-text font-semibold">Engineering Services</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              From initial design through final commissioning, GeoStellar provides the technical 
              expertise contractors need to deliver exceptional geothermal installations.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Control - Standard Section */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Standard on Every Project
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Engineering Control —
                <br />
                <span className="gradient-text font-semibold">Standard, Not Optional</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                High-precision engineering control <span className="text-white">should not be reserved for complex sites</span>. 
                At GeoStellar, <span className="text-sky-400 font-medium">it is the baseline on every geothermal system we deliver</span>.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether a project uses conventional vertical borefields or advanced collocated and directional designs — 
                every site is engineered, executed, and verified using <span className="text-white">oil & gas–level quality control</span>.
              </p>
              <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-lg">
                <p className="text-lg text-slate-300 italic">
                  "Precision is our baseline. Footprint optimization is an upgrade."
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all hover-lift">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Layers className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Conventional Vertical Borefields</h3>
                    <p className="text-sm text-slate-400">Full O&G-grade verification, monitoring, and reporting — even on "simple" systems.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all hover-lift">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Advanced Collocated & Directional</h3>
                    <p className="text-sm text-slate-400">Same engineering discipline, with precision trajectory control when the site demands it.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-sky-500/5 border border-sky-500/20 rounded-lg">
                <p className="text-sm text-sky-400 text-center">
                  Every site gets oil & gas–grade control. Some sites get more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collocated & Directional Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {directionalBenefits.map((benefit, index) => (
                  <div key={index} className="p-4 bg-slate-950/50 border border-slate-800 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-sky-500 mb-2" />
                    <p className="text-sm text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
                <Compass className="h-4 w-4 mr-2" />
                Advanced Capability
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Collocated & Directional —
                <br />
                <span className="gradient-text font-semibold">When the Site Demands It</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                For constrained, urban, or high-density sites, we offer <span className="text-white">collocated borefield design 
                and directional drilling</span>, adapted from oil & gas practices.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                This capability is <span className="text-cyan-400">optional</span>, site-driven, and deployed 
                <span className="text-white"> only when it creates real value</span>.
              </p>
              <p className="text-slate-300">
                The core engineering discipline remains the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QC & Monitoring Section */}
      <section className="py-24 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-6">
              <Activity className="h-4 w-4 mr-2" />
              Across All System Types
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              QC & Monitoring —
              <span className="gradient-text font-semibold"> Verified Performance</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our quality control and monitoring framework applies equally to traditional vertical 
              and collocated/directional geothermal systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {qcFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all">
                <CheckCircle2 className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-block p-6 bg-slate-900/50 border border-slate-700 rounded-lg">
              <p className="text-lg text-slate-300">
                <span className="text-sky-400 font-medium">Measured performance</span>, not assumed performance — across every project type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EaaS Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6">
                <TrendingUp className="h-4 w-4 mr-2" />
                Built for 2025+
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                EaaS Models —
                <br />
                <span className="gradient-text font-semibold">Engineering You Can Finance</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                As geothermal shifts toward <span className="text-white">Energy-as-a-Service (EaaS)</span> and 
                performance-based contracts, engineering accountability becomes critical.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                When millions are invested on 20–30 year horizons, 
                <span className="text-sky-400 font-medium"> trust must be engineered — not promised</span>.
              </p>
            </div>
            
            <div className="space-y-4">
              {eaasFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-slate-950/50 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-all hover-lift">
                  <Database className="h-5 w-5 text-emerald-400 mr-4 flex-shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">FULL SERVICE CATALOG</h2>
            <p className="text-3xl md:text-4xl font-light text-white">
              Complete Engineering Services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all hover-lift"
              >
                <div className="text-sky-500 mb-6 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-500">
                      <span className="w-1 h-1 bg-sky-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">OUR PROCESS</h2>
            <p className="text-3xl md:text-4xl font-light text-white">
              How We Work With You
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consult", desc: "Understand your project scope and requirements" },
              { step: "02", title: "Design", desc: "Engineer optimal solutions with precision" },
              { step: "03", title: "Execute", desc: "Oversee installation with rigorous QC" },
              { step: "04", title: "Deliver", desc: "Commission and verify system performance" }
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className="text-6xl font-light text-sky-500/20 mb-4 group-hover:text-sky-500/40 transition-colors">{phase.step}</div>
                <h3 className="text-lg font-medium text-white mb-2">{phase.title}</h3>
                <p className="text-sm text-slate-400">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-sky-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Need Technical Support for Your Project?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Whether it's a single service or full project support, we're here to help you 
            deliver geothermal excellence.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-all hover:shadow-lg hover:shadow-sky-500/25"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
